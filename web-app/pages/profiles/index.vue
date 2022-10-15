<template>
  <b-container>
    <p>Search for a profile:</p>
    <b-form-input v-model="githubUsername" placeholder="Github Username" />
    <NuxtLink
      :to="`/profiles/${githubUsername}`"
    >
      <b-button>Search</b-button>
    </NuxtLink>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      githubUsername: ''
    }
  }
}
</script>
