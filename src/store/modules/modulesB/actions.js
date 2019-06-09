export default {
  decrementA({ rootState, commit }, payload) {
    // payloadにルートステートを代入
    payload = rootState;
    // console.log(payload);
    commit("decrement", payload);
  }
};