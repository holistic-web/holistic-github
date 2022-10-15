<template>
  <b-container>
    <p>Hello from GithubProfile ID page</p>
    <b-table v-if="tableData" striped :items="tableData" />
  </b-container>
</template>

<script>
export default {
  fetch () {
    this.$store.dispatch('GithubUser/fetchIssues', this.userId)
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
