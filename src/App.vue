<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld :msg="text" />
    <button @click="fromModulesB({ name: 'ann' })">ROOT DOWN</button>
    <button @click="decrementA({ name: 'mary' })">DOWN</button>
    {{ resultNum }}
    <button @click="incrementA({ name: 'takeshi' })">UP</button>
    <button @click="fromModulesA({ name: 'ken' })">ROOT UP</button>
    <Reuse />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Reuse from "./components/Reuse";

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
    Reuse
  },
  data() {
    return {
      text: "親のデータ"
    };
  },
  computed: {
    // rootのステートをマッピング
    ...mapState(["num"]),
    // moduleのステートを加工したものをマッピング（moduleのステートとゲッターズが受け取れる）
    ...mapState("modulesA", {
      judge(state, getters, c) {
        // console.log(state, getters);
        return state.count > 0;
      }
    }),
    // moduleのステートを別名でマッピング
    ...mapState("modulesB", {
      nameB: "name",
      countB: "count"
    }),
    // rootのゲッターズをマッピング
    ...mapGetters(["resultNum"])
  },
  methods: {
    ...mapActions("modulesA", ["incrementA"]),
    ...mapActions("modulesB", { 
      decrementA: "decrementA"
    }),
    // root定義のアクションを呼び出す、モジュールのアクションをマッピング
    ...mapActions("modulesA", ["fromModulesA"]),
    // root定義のアクションを呼び出す、モジュールのアクションをマッピング
    ...mapActions("modulesB", ["fromModulesB"])
  },
  watch: {
    resultNum(val) {
      if(val <= 0) alert('limit!')
    }
  },
  mounted() {
    console.log(this.nameB, this.countB, this.judge, this.num);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
