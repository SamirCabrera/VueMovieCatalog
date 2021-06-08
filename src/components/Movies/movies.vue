<template>
  <div>
    <md-card
      md-with-hover
      class="md-card-main"
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    >
      <md-card-media>
        <img src="{movie.images[0].url}}" alt="People" />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ movie.title }}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">

          <div class="md-div-switch">
            <md-switch v-model="movie.like" @change="changeLike(movie.id)">Me gusta</md-switch>
            <md-switch v-model="movie.view" @change="changeView(movie.id)">La he visto</md-switch>
            <md-switch v-model="movie.toViewLater" @change="changeToLater(movie.id)">Añadir a ver mas tarde</md-switch>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
              <md-tooltip>Ver detalles de pelicula</md-tooltip>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            {{ movie.description }}
          </md-card-content>

          <md-button class="md-accent" @click="deleteMovie(movie.id)">Eliminar pelicula</md-button>
          <md-button class="md-primary" @click="editMovie(movie)">Editar pelicula</md-button>

          <DialogEditMovie v-if="showEditDialog" 
            :showDialog = "showEditDialog"
            :movie = movieToEdit 
            @close="showEditDialog = false"
          ></DialogEditMovie>

        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>

import DialogEditMovie from '@/components/Movies/dialog-edit-movie';

export default {
  name: "Movie",
  components: {
    DialogEditMovie
  },

  data() {
    return {
      movies: null,
      showEditDialog: false,
      movieToEdit: null
    }
  },

  created() {
    this.$store.commit("getMovies");
    this.movies = this.$store.state.movie;
  },

  methods: {
    deleteMovie(movieId) {
      this.$store.state.idMovie = movieId;
      this.$store.commit("deleteMovie");
    },

    editMovie(movieEdit) {
      this.showEditDialog = true
      this.movieToEdit = movieEdit;
    },

    changeLike(movieId) {
      this.$store.state.idMovie = movieId;
      this.$store.commit("changeLike");
    },

    changeView(movieId) {
      this.$store.state.idMovie = movieId;
      this.$store.commit("changeView");
    },

    changeToLater(movieId) {
      this.$store.state.idMovie = movieId;
      this.$store.commit("changeToLater");
    }
  }
};
</script>

<style scoped>
.md-card-media img {
  width: 10%;
}

.md-card-main {
  margin: 32px;
}

.md-div-switch {
  margin: 0 40px;
}

</style>