export const state = () => ({
  issues: null
})

export const getters = {
  getIssues (state) {
    return state.issues
  }
}

export const mutations = {
  setIssues (state, issues) {
    state.issues = issues
  }
}

export const actions = {
  async fetchUserStats ({ state }, userId) {
    const getUserStats = this.$fire.functions.httpsCallable('getUserStats')
    const { data: userStats } = await getUserStats(userId)
    this.commit('GithubUser/setIssues', userStats.issues)
    return userStats
  }
}
