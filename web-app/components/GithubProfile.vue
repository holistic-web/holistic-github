<template>
  <b-container>
    <p>Hello from GithubProfile</p>
    {{ issues }}
  </b-container>
</template>

<script>
export default {
  computed: {
    issues () {
      return this.$store.state.GithubUser.issues
    }
  },
  created () {
    this.$store.dispatch('GithubUser/fetchIssues')
  }
}
</script>
