<template>
  <b-container>
    <p>Hello from GithubProfile</p>
    {{ comments }}
  </b-container>
</template>

<script>
export default {
  computed: {
    comments () {
      return this.$store.state.GithubUser.comments
    }
  },
  created () {
    this.$store.dispatch('GithubUser/fetchComments')
  }
}
</script>
