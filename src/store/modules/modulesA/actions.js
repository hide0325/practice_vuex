export default {
  incrementA({ rootState, commit }, payload) {
    // payloadにルートステートを代入
    console.log(payload);
    payload = rootState;
    commit("increment", payload);
  },
  // rootのアクションをdispatch
  fromModulesA({ dispatch }, payload) {
    // rootのアクションにpayloadが必要なければnullでOK
    dispatch("rootIncrementA", payload, { root: true });
  }
};