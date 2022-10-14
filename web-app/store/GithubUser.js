export const state = () => ({
  comments: 0
})

export const getters = {
  getComments (state) {
    return state.comments
  }
}

export const actions = {
  async fetchComments ({ state }) {
    // make request
    const getComments = this.$fire.functions.httpsCallable('getComments')
    const response = await getComments()
    state.comments = response
    return response
  }
}
