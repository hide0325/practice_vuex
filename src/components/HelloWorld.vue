<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="incrementA({ name: 'createNamespacedHelpers' })">UP</button>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('modulesB');
const { mapActions } = createNamespacedHelpers('modulesA');

export default {
  props: {
    msg: String
  },
  computed: {
    // modulesBのステートをマッピング
    ...mapState(["name"])
  },
  methods: {
    // modulesAのアクションをマッピング
    ...mapActions(["incrementA"])
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>