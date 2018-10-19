import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({

    state:{
        isLoading: false,
        userData:{}
    },
    mutations:{
        "LOADING" (state,val){
            state.isLoading = val;
        },
        "GET_USERDATA"(state,val){
            state.userData=val
        }
    },
    actions:{

    },
    plugins:[
        createPersistedState({
            storage:{
                getItem: key => localStorage.getItem(key),
                setItem: (key,value) => localStorage.setItem(key,value),
                removeItem: key => localStorage.removeItem(key)
            }
        })
    ]
})
export default store