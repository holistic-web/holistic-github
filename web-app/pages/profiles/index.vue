<template>
  <b-container>
    <p>Search for a profile:</p>
    <b-form-input
      v-model="githubUsername"
      placeholder="Github Username"
      @keyup.enter="search"
    />
    <b-button @click="search">
      Search
    </b-button>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      githubUsername: ''
    }
  },
  methods: {
    search () {
      this.$router.push(`/profiles/${this.githubUsername}`)
    }
  }
}
</script>
