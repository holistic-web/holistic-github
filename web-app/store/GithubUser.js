export const state = () => ({
  comments: 0
})

export const getters = {
  getComments (state) {
    return state.comments
  }
}

export const mutations = {
  setComments (state, comments) {
    state.comments = comments
  }
}

export const actions = {
  async fetchComments ({ state }, userId) {
    const getComments = this.$fire.functions.httpsCallable('getComments')
    const { data } = await getComments(userId)
    this.commit('GithubUser/setComments', data)
    return data
  }
}
