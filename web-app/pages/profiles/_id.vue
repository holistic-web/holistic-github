<template>
  <b-container>
    <p>Hello from GithubProfile ID page</p>
    {{ comments }}
  </b-container>
</template>

<script>
export default {
  fetch () {
    this.$store.dispatch('GithubUser/fetchComments', this.id)
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    comments () {
      return this.$store.state.GithubUser.comments
    }
  }
}
</script>
