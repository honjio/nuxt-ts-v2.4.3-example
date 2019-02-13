import Vue from 'vue';
import Vuex from 'vuex';
import exampleModule from '~/store/example';

Vue.use(Vuex);
new Vuex.Store({
  modules: {
    example: exampleModule,
  }
})
