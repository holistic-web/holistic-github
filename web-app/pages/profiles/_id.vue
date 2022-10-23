<template>
  <b-container class="ProfileID">
    <p>GitHub Stats - <b>{{ userId }}</b></p>

    <profile-user :user-id="userId" />

    <page-loader v-if="isLoading" />
    <template v-else>
      <b-card-group deck>
        <b-card
          v-for="option in componentOptions"
          :key="option.value"
          :title="option.title"
        >
          <b-card-text>
            {{ option.text }}
          </b-card-text>

          <b-button
            :variant="getCardButtonVariant(option.value)"
            @click="shownComponent = option.value"
          >
            {{ getCardButtonText(option.value) }}
          </b-button>
        </b-card>
      </b-card-group>

      <section class="ProfileID__content">
        <b-table
          v-if="shownComponent==='stats'"
          striped
          :items="tableData"
        />
        <profile-tips
          v-if="shownComponent==='tips'"
          :issues="issues"
          :pull-requests="pullRequests"
        />
      </section>
    </template>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      userId: this.$route.params.id,
      isLoading: false,
      shownComponent: null,
      componentOptions: [
        { value: 'tips', title: 'Tips', text: 'View useful tips for this user' },
        { value: 'stats', title: 'Stats', text: 'View all stats for this user' }
      ]
    }
  },
  async fetch () {
    this.isLoading = true
    await Promise.all([
      this.$store.dispatch('GithubUser/fetchPullRequests', this.userId),
      this.$store.dispatch('GithubUser/fetchIssues', this.userId),
      this.$store.dispatch('GithubUser/fetchStats', this.userId)
    ])
    this.isLoading = false
  },
  computed: {
    pullRequests () {
      return this.$store.state.GithubUser.pullRequests
    },
    issues () {
      return this.$store.state.GithubUser.issues
    },
    tableData () {
      const data = [
        {
          title: 'Pull Requests',
          ...this.$store.state.GithubUser.stats.pullRequests
        },
        {
          title: 'Issues',
          ...this.$store.state.GithubUser.stats.issues
        }
      ]
      return data
    }
  },
  methods: {
    getCardButtonText (optionValue) {
      return this.shownComponent === optionValue ? 'Selected' : 'Select'
    },
    getCardButtonVariant (optionValue) {
      return this.shownComponent === optionValue ? 'primary' : 'outline-primary'
    }
  }
}
</script>

<style lang="scss">
.ProfileID {
  display: flex;
  flex-direction: column;

  &__image {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }

  &__content {
    margin-top: 2rem;
  }
}
</style>
