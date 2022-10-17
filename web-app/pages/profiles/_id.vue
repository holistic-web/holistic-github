<template>
  <b-container>
    <p>GitHub Stats - <b>{{ userId }}</b></p>
    <b-table v-if="!isLoading" striped :items="tableData" />
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
    tableData () {
      const data = []
      for (const key in this.userStats) {
        data.push({
          key,
          value: this.userStats[key].length
        })
      }
      return data
    }
  }
}
</script>
