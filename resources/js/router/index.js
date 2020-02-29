import Vue from 'vue';
import router from 'vue-router';
import routes from './routes';

Vue.use(router);


export default new router({
    mode: 'history',
    routes,
});