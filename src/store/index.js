import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

// modules
import modulesA from "./modules/modulesA";
import modulesB from "./modules/modulesB";
import modulesReuse from "./modules/modulesReuse";

const store = new Vuex.Store({
  modules: {
    modulesA,
    modulesB,
    modulesReuse1: modulesReuse,
    modulesReuse2: modulesReuse,
    modulesReuse3: modulesReuse
  },
  state,
  getters,
  mutations,
  actions
});

export default store;