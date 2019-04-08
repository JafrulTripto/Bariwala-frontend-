import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        form: {},
        employees:[],
        httpLink: 'http://pos.test/api/',
        error:'',
        roles:[],
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
        },
        showEmployee(state, employees){
            state.employees = employees;
        },
        addEmployee(){

        },
        showRoles(state, roles){
            state.roles= roles;
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
        showEmployee(context){
            let _this = this;
            return new Promise((resolve, reject) =>{
                axios.get(_this.state.httpLink + 'showEmployee')
                    .then(function (response) {
                        context.commit('showEmployee',response.data);
                        resolve(response);
                    }).catch(function (error) {
                    console.log(error);
                    reject(error);
                })
            } )
        },
        showRoles(context){
            let _this = this;
            return new Promise((resolve, reject) =>{
                axios.get(_this.state.httpLink + 'showRoles')
                    .then(function (response) {
                        context.commit('showRoles',response.data);
                        resolve(response);
                    }).catch(function (error) {
                    console.log(error);
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
        },
        addEmployee(context,credentials){
            return new Promise((resolve, reject) =>{
                let _this= this;
                axios.post(_this.state.httpLink + 'addEmployee',credentials)
                    .then(function (response) {
                       context.commit('addEmployee');
                       resolve(response);
                    }).catch(function (error) {
                    console.log(error);
                    reject(error);
                })
            } )

        }
    }
});