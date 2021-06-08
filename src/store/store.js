import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
    state: {
        movie: [],
        movieToViewLater: [],
        newMovie: [],
        idMovie: null
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
        },

        postMovie(state) {

            Vue.axios.post("https://samir-moviecatalog-api.azurewebsites.net/Movies", state.newMovie).then( (res) => {
                console.log(res);
            });
        },

        deleteMovie(state) {
            Vue.axios.delete("https://samir-moviecatalog-api.azurewebsites.net/Movies/" + state.idMovie).then( (res) => {
                console.log(res);
            })
        },

        putMovie() {
            
        }
    },

    getters: {
        movies: state => state.movie
    }
})