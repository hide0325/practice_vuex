<template>
  <div>
    <button @click="dynamicActions" style="margin-top: 20px;">DynamicActions</button>
    <div>
      <button @click="unregisterModule">unregisterModule</button>
      <button @click="registerModule">registerModule</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'; 

import modulesC from '@/store/modules/modulesC'
const name = 'dynamicModule'

export default {
  async created () {
    const store = this.$store;

    // モジュールがレジストされていなかったら
    if (!(store && store.state && store.state[name])) {
      await store.registerModule(name, modulesC);
    } else {
      console.log(`既にレジストされているモジュール名: ${name}`);
    }
  },
  mounted () {
    console.log(this.registerState)
    console.log(`${this.registerGetters}動的なゲッターズ`)
  },
  computed: {
    ...mapState(name, ['registerState']),
    ...mapGetters(name, ['registerGetters'])
  },
  methods: {
    ...mapActions(name, ['registerActions']),
    ...mapMutations(name, ['registerMutations']),
    dynamicActions () {
      this.registerActions()
      console.log(this.registerState)
      console.log(`${this.registerGetters}動的なゲッターズ（ミューテーション後）`)
    },
    unregisterModule () {
      // createdでレジストしたモジュールを削除
      this.$store.unregisterModule(name, modulesC)
      console.clear()
      console.log(this.registerState)
    },
    registerModule () {
      // 再度モジュールをレジスト
      this.$store.registerModule(name, modulesC);
      console.clear()
      console.log(this.registerState);
    },
  }
}
</script>