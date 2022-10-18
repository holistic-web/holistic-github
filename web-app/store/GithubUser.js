export const state = () => ({
  stats: null
})

export const getters = {
  getStats (state) {
    return state.stats
  }
}

export const mutations = {
  setStats (state, stats) {
    state.stats = stats
  }
}

export const actions = {
  async fetchUserStats ({ state }, userId) {
    this.commit('GithubUser/setStats', null)
    const getUserStats = this.$fire.functions.httpsCallable('getUserStats')
    const { data: userStats } = await getUserStats(userId)
    this.commit('GithubUser/setStats', userStats)
    return userStats
  }
}
