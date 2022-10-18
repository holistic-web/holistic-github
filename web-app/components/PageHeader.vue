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
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss">
.PageHeader {
  a, .navbar-brand, .navbar-brand:hover {
    color: white;
  }
}
</style>
