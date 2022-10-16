export const state = () => ({
  userId: null,
  issues: null
})

export const getters = {
  getIssues (state) {
    return state.issues
  }
}

export const mutations = {
  setUserId (state, userId) {
    state.userId = userId
  },
  setIssues (state, issues) {
    state.issues = issues
  }
}

export const actions = {
  async fetchUserStats ({ state }, userId) {
    this.commit('GithubUser/setUserId', userId)

    const getIssues = this.$fire.functions.httpsCallable('getIssues')
    const { data } = await getIssues(userId)
    this.commit('GithubUser/setIssues', data)
    return data
  }
}
