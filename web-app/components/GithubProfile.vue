<template>
  <div>
    <p>Hello from GithubProfile</p>
    {{ comments }}
  </div>
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
