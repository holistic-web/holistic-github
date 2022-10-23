export const state = () => ({
  issues: null,
  pullRequests: null,
  data: null,
  stats: null
})

export const getters = {
  getIssues (state) {
    return state.issues
  },
  getPullRequests (state) {
    return state.pullRequests
  },
  getData (state) {
    return state.data
  },
  getStats (state) {
    return state.stats
  }
}

export const mutations = {
  setIssues (state, issues) {
    state.issues = issues
  },
  setPullRequests (state, pullRequests) {
    state.pullRequests = pullRequests
  },
  setData (state, data) {
    state.data = data
  },
  setStats (state, stats) {
    state.stats = stats
  }
}

export const actions = {
  async fetchIssues ({ commit }, userId) {
    commit('setIssues', null)
    const getAllIssues = this.$fire.functions.httpsCallable('getAllIssues')
    const { data: issues } = await getAllIssues(userId)
    commit('setIssues', issues)
    return issues
  },
  async fetchPullRequests ({ commit }, userId) {
    commit('setPullRequests', null)
    const getAllPullRequests = this.$fire.functions.httpsCallable('getAllPullRequests')
    const { data: pullRequests } = await getAllPullRequests(userId)
    commit('setPullRequests', pullRequests)
    return pullRequests
  },
  async fetchData ({ commit }, userId) {
    commit('setData', null)
    const getUser = this.$fire.functions.httpsCallable('getUser')
    const { data } = await getUser(userId)
    commit('setData', data)
    return data
  },
  async fetchStats ({ commit }, userId) {
    commit('setStats', null)
    const getProfileStats = this.$fire.functions.httpsCallable('getProfileStats')
    const { data: stats } = await getProfileStats(userId)
    commit('setStats', stats)
    return stats
  }
}
