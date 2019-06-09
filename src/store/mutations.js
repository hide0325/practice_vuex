export default {
  rootIncrement(state, payload) {
    // この時点ではステートの参照がローカル
    console.log(payload)
    // state = payload;
    // ここで参照をルートに変更
    // console.log(state);
    state.num += 2;
  },
  rootDecrement(state, payload) {
    console.log(payload)
    state.num -= 2;
  }
};