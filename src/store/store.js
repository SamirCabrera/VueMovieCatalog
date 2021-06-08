import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
    state: {
        movie: '',
        movieToViewLater: ''
    },

    mutations: {

        getMovies(state) {
            Vue.axios.get("https://samir-moviecatalog-api.azurewebsites.net/Movies").then( (res) => {
                state.movie = res.data
            })
        },

        getMovieToViewLater(state) {
            Vue.axios.get("https://samir-moviecatalog-api.azurewebsites.net/Movies/ToLater").then( (res) => {
                state.movieToViewLater = res.data
            })
        }
    },

    getters: {
        movies: state => state.movie
    }
})