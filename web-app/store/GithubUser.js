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
    // make request
    const getComments = this.$fire.functions.httpsCallable('getComments', userId)
    const response = await getComments()
    this.commit('GithubUser/setComments', response)
    return response
  }
}
