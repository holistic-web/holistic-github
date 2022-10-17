<template>
  <b-container>
    <p>GitHub Stats - <b>{{ userId }}</b></p>
    <page-loader v-if="isLoading" />
    <b-table v-else striped :items="tableData" />
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      userId: this.$route.params.id,
      isLoading: false
    }
  },
  async fetch () {
    this.isLoading = true
    await this.$store.dispatch('GithubUser/fetchUserStats', this.userId)
    this.isLoading = false
  },
  computed: {
    userStats () {
      return this.$store.state.GithubUser.stats
    },
    pullRequests () {
      return this.userStats.pullRequests
    },
    issues () {
      return this.userStats.issues
    },
    tableData () {
      const data = [
        {
          title: 'Pull Requests',
          count: this.pullRequests.length,
          empty: (this.pullRequests.filter(pr => pr.body === '').length),
          closed: this.pullRequests.filter(pr => pr.state === 'closed').length
        },
        {
          title: 'Issues',
          count: this.issues.length,
          empty: (this.issues.filter(issue => issue.body === '').length),
          closed: this.issues.filter(issue => issue.state === 'closed').length
        }
      ]
      return data
    }
  }
}
</script>
