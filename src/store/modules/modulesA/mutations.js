export default {
  increment(state, payload) {
    // この時点ではステートの参照がローカル
    // console.log(state)
    state = payload;
    // ここで参照をルートに変更
    // console.log(state);
    state.num += 1;
  }
};