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
    const getIssues = this.$fire.functions.httpsCallable('getIssues')
    const { data } = await getIssues(userId)
    this.commit('GithubUser/setIssues', data)
    return data
  }
}
