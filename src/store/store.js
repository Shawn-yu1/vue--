import Vue from 'Vue'
import Vuex from 'vuex'// 引入 axios
import axios from 'axios';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        msg:[]
    },
    action:{
    }
})
export default store;