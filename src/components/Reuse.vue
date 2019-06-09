<template>
  <div>
    <button @click="reuseIncrementA1">REUSE1 UP</button>
    {{ modulesReuse1.count }}
    <!-- ↓モジュールのstateのリユース記法２の場合 -->
    <!-- {{ count1 }} -->
    <button @click="reuseIncrementA2">REUSE2 UP</button>
    {{ modulesReuse2.count }}
    <!-- ↓モジュールのstateのリユース記法２の場合 -->
    <!-- {{ count2 }} -->
    <button @click="reuseIncrementA3">REUSE3 UP</button>
    {{ modulesReuse3.count }}
    <!-- ↓モジュールのstateのリユース記法２の場合 -->
    <!-- {{ count3 }} -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'reuse',
  computed: {
    // モジュールのstateのリユース記法１
    ...mapState(["modulesReuse1", "modulesReuse2", "modulesReuse3"])

    // モジュールのstateのリユース記法２
    // ...mapState('modulesReuse1', { count1: 'count' }),
    // ...mapState('modulesReuse2', { count2: 'count' }),
    // ...mapState('modulesReuse3', { count3: 'count' }),
  },
  methods: {
    // モジュールのactionsのリユース記法１
    // ...mapActions({
    //   reuseIncrementA1: "modulesReuse1/reuseIncrementA",
    //   reuseIncrementA2: "modulesReuse2/reuseIncrementA",
    //   reuseIncrementA3: "modulesReuse3/reuseIncrementA"
    // })

    // モジュールのactionsのリユース記法２
    ...mapActions('modulesReuse1', { reuseIncrementA1: 'reuseIncrementA' }),
    ...mapActions('modulesReuse2', { reuseIncrementA2: 'reuseIncrementA' }),
    ...mapActions('modulesReuse3', { reuseIncrementA3: 'reuseIncrementA' })    
  }
}
</script>