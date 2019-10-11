const state = {
  registerState: '動的なステート'  
};

const getters = {
  registerGetters: state => state.registerState.length
}

const actions = {
  registerActions (context) {
    // alert('動的なアクション')
    context.commit('registerMutations')
  }
}

const mutations = {
  registerMutations (state) {
    state.registerState = '動的なミューテーション'
  }
}

export default {
  namespaced: true,
  // state () {
  //   return {
  //     registerState: '動的なステート'
  //   }
  // },
  state,
  getters,
  actions,
  mutations
}