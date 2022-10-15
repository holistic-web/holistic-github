<template>
  <div>
    <b-navbar>
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
            </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
  </div>
</template>
