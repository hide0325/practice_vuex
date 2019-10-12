<template>
  <div style="margin-top: 20px;">
    <button @click="storeWatchMutation">{{ storeWatch }}</button>
    <button @click="subscribeMutation">{{ subscribe }}</button>
    <button @click="subscribeActionMutation">{{ subscribeAction }}</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      storeWatch: 'storeWatch',
      subscribe: 'subscribe',
      subscribeAction: 'subscribeAction'
    }
  },
  methods: {
    ...mapMutations(['rootIncrement']),
    ...mapActions(['rootIncrementA']),
    subscribeMutation () {
      // commitしたmutationの情報が第一引数で受け取れる
      this.$store.subscribe((mutation, state) => {
        mutation.type === 'rootIncrement' ?  this.subscribe = 'rootIncremented!!' : ''
      })
      this.rootIncrement('Subscribe')
    },
    storeWatchMutation () {
      // state, gettersを引数で受け取れて、監視対象を定義する
      // 下記は getters.resultNumLength が監視対象
      // $watchはhandlerオプション等を指定不可！？
      this.$store.watch((state, getters) => getters.resultNumLength, 
        (newVal, oldVal) => {
          console.log(newVal, oldVal)
        }
      )
      this.rootIncrement('storeWatch')
    },
    subscribeActionMutation () {
      // dispatchしたmutationの情報が第一引数で受け取れる
      this.$store.subscribeAction((action, state) => {
        console.log(action, state)
      })
      this.rootIncrementA('subscribeAction')
    }
  }
}
</script>