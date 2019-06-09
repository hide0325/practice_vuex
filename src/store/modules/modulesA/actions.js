export default {
  incrementA({ rootState, commit }, payload) {
    // payloadにルートステートを代入
    // payload = rootState;
    console.log(payload);
    commit("increment", payload);
  },
  // rootのアクションをdispatch
  fromModulesA({ dispatch }, payload) {
    // rootのアクションにpayloadが必要なければnullでOK
    dispatch("rootIncrementA", payload, { root: true });
  }
};