<template>
  <div class="ProfileUser">
    <page-loader v-if="!user" />
    <template v-else>
      <div class="ProfileUser__header">
        <div class="ProfileUser__header__avatar">
          <img :src="user.avatar_url">
        </div>
        <div class="ProfileUser__header__info">
          <h1>{{ user.name }}</h1>
          <p>{{ user.bio }}</p>
          <p>User since: {{ creationDate }}</p>
        </div>
      </div>
      <div class="ProfileUser__stats">
        <div class="ProfileUser__stats__item">
          <h2>{{ user.public_repos }}</h2>
          <p>Repositories</p>
        </div>
        <div class="ProfileUser__stats__item">
          <h2>{{ user.followers }}</h2>
          <p>Followers</p>
        </div>
        <div class="ProfileUser__stats__item">
          <h2>{{ user.following }}</h2>
          <p>Following</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ProfileUser',
  computed: {
    user () {
      if (!this.$store.state.GithubUser.stats) { return null }
      return this.$store.state.GithubUser.stats.user
    },
    creationDate () {
      return moment(this.user.created_at).format('MMMM Do YYYY')
    }
  }
}
</script>

<style lang="scss">
.ProfileUser {
  display: flex;
  justify-content: space-between;

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    &__avatar {
      margin-right: 2rem;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    &__info {
      h1 {
        margin: 0;
      }
    }
  }

  &__stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    &__item {
      text-align: center;
      margin: 0 1rem;
      h2 {
        margin: 0;
      }
    }
  }
}
</style>
