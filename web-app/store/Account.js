export const state = () => ({
  account: null
})

export const getters = {
  getAccount (state) {
    return state.account
  }
}

export const mutations = {
  setAccount (state, account) {
    console.log('account: ', account)
    if (account) {
      state.account = {
        displayName: account.displayName
      }
    } else {
      state.account = null
    }
  }
}

export const actions = {
  async logIn ({ state }, userId) {
    const provider = new this.$fireModule.auth.GithubAuthProvider()
    const result = await this.$fire.auth.signInWithPopup(provider)
    this.commit('Account/setAccount', result.user)
  },

  async logOut ({ state }, userId) {
    await this.$fire.auth.signOut()
    this.commit('Account/setAccount', null)
  }
}
