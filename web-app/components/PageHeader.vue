<template>
  <b-navbar class="PageHeader" variant="primary">
    <b-navbar-brand href="/">
      Holistic Github
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <NuxtLink to="/profiles">
            Profiles
          </nuxtlink>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss">
.PageHeader {
  a,
  a:hover,
  .navbar-brand,
  .navbar-brand:hover {
    color: white;
    text-decoration: none;
  }

  .nuxt-link-active {
    border-bottom: 2px solid white;
  }
}
</style>
