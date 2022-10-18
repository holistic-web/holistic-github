<template>
  <b-navbar variant="primary">
    <NuxtLink to="/">
      <b-navbar-brand>
        Holistic Github
      </b-navbar-brand>
    </NuxtLink>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <NuxtLink to="/profiles">
          <b-nav-item>
            Profiles
          </b-nav-item>
        </NuxtLink>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
