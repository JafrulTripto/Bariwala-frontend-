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
        signUp(state) {
            axios.post(state.httpLink + 'signUp', state.form,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                console.log(error);
            })
        }
    }
});