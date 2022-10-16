<template>
  <b-container>
    <p>GitHub Stats - <b>{{ userId }}</b></p>
    {{ issues }}
  </b-container>
</template>

<script>
export default {
  computed: {
    issues () {
      return this.$store.state.GithubUser.issues
    },
    userId () {
      return this.$store.state.GithubUser.userId
    }
  },
  created () {
    this.$store.dispatch('GithubUser/fetchUserStats')
  }
}
</script>
