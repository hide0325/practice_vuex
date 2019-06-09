export default {
  incrementA({ rootState, commit }, payload) {
    // payloadにルートステートを代入
    payload = rootState;
    // console.log(payload);
    commit("increment", payload);
  }
};