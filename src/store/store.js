import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        form: {},
        httpLink: 'http://bariwala.test/api/'
    },
    mutations: {
        retrieveUserData(state,user_Data){
            state.userData = user_Data;

        },
    },
    actions:{
        retrieveUserData(context,credentials){
            return new Promise((resolve, reject) =>{
                axios.post(this.state.httpLink +'auth/login',credentials)
                    .then(function(response){
                        console.log(response);
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
                        console.log(error);
                        reject(error);
                    })
            } )

        },
    }
});