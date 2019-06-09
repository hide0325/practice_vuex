export default {
  rootIncrementA({ commit }, payload) {
    // payloadにルートステートを代入
    // payload = rootState;
    // console.log(payload);
    commit("rootIncrement", payload);
  }
};