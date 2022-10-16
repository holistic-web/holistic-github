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
    issues () {
      return this.$store.state.GithubUser.issues
    },
    tableData () {
      const data = []
      if (this.issues) {
        data.push({ field: 'issues', count: this.issues.length })
      }
      return data
    }
  }
}
</script>
