import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        form: {},
        httpLink: 'http://bariwala.test/api/',
        error:'',
        user_data:JSON.parse(localStorage.getItem('user_data'))||null
    },
    getters:{
        getUserToken(state){
            console.log(state.user_data)
            return state.user_data.token;
        },
        isLoggedIn(state){
            if (!state.user_data || !state.user_data.token)
                return false;

            return true;
        }
    },
    mutations: {
        retrieveUserData(state,user_Data){
            state.user_data = user_Data;

        },
        destroyToken(state){
            state.user_data.token = null;
            state.error = '';
        }
    },
    actions:{
        retrieveUserData(context,credentials){
            let _this = this;
            return new Promise((resolve, reject) =>{
                axios.post(_this.state.httpLink +'auth/login',credentials)
                    .then(function(response){
                        let user_Data = {
                            token:response.data.access_token,
                            user_id:response.data.user.id,
                            userName:response.data.user.name
                        };
                        localStorage.setItem('user_data',JSON.stringify(user_Data));
                        context.commit('retrieveUserData',user_Data);
                        resolve(response);
                    })
                    .catch(error=>{
                        _this.state.error='Invalid user name or password'
                        reject(error);
                    })
            } )

        },
        destroyToken(context){
            return new Promise((resolve, reject) =>{
                axios.post(this.state.httpLink+'auth/logout?token='+this.state.user_data.token)
                    .then(function (response){
                        localStorage.removeItem('user_data');
                        context.commit('destroyToken');
                        resolve(response);
                    })
                    .catch(error=>{
                        localStorage.removeItem('user_data');
                        context.commit('destroyToken');
                        reject(error);
                    })
            })
        }
    }
});