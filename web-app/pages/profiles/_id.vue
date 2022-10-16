<template>
  <b-container>
    <p>GitHub Stats - <b>{{ userId }}</b></p>
    <b-table v-if="tableData" striped :items="tableData" />
  </b-container>
</template>

<script>
export default {
  fetch () {
    this.$store.dispatch('GithubUser/fetchUserStats', this.userId)
  },
  computed: {
    userId () {
      return this.$route.params.id
    },
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
