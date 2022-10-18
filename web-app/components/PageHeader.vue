<template>
  <b-navbar class="PageHeader" variant="primary">
    <NuxtLink to="/">
      <b-navbar-brand>
        Holistic Github
      </b-navbar-brand>
    </NuxtLink>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <NuxtLink to="/profiles">
            Profiles
          </nuxtlink>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-btn v-if="account" @click="signOut">
          Sign Out
        </b-btn>
        <b-btn v-else @click="signIn">
          Sign In
        </b-btn>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    account () {
      return this.$store.state.Account.account
    }
  },
  methods: {
    async signIn () {
      await this.$store.dispatch('Account/logIn')
    },
    async signOut () {
      await this.$store.dispatch('Account/logOut')
    }
  }
}
</script>

<style lang="scss">
.PageHeader {
  a {
    color: white;
  }
}
</style>
