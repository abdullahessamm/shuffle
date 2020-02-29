import store from './store/store';
import router from './router/index';

require('./bootstrap');

window.lang = document.querySelector('meta[name="lang"]').getAttribute('content');

window.Vue = require('vue');

Vue.component('App', require('./components/App.vue').default);

document.querySelector('#app').innerHTML = '<App></App>';

const app = new Vue({
    el: '#app',
    store,
    router
});
// Get language files from api to store
app.$store.commit('changeLocalLanguage', lang);
app.$store.commit('getSentencesAPI');
