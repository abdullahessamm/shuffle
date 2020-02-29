import Vue from 'vue';
import vuex from 'vuex';
import Axios from 'axios';
import Events from './modules/Events';

Vue.use(vuex);



const store = new vuex.Store({
    state: {
        localLanguage: 'en',
        sentences: null,
        render: false,
        siteName: 'shuffle'
    }, //End of state
    getters: {
        getSentences: state => {
            return state.sentences;
        }, //End of getSentences
        render: state => {
            return state.render;
        } //End of render
    }, //End of getters

    mutations: {
        changeLocalLanguage: function (state, lang) {
            state.localLanguage = lang;
        },
        getSentencesAPI: function (state) {
            Axios.get(`${window.location.origin}/api/getSentences?lang=${state.localLanguage}`)
            .then(res => {state.sentences = res.data; state.render = true})
            .catch(err => console.log(err));
        }, //End of getSentencesAPI
    }, //End of mutations

    modules: {
        Events, 
    },
    
});

export default store;