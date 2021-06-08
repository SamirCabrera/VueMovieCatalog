<template>
  <div>
    <md-card md-with-hover 
      class="md-card-main" 
      v-for="movie in movies" 
      :key="movie.id" 
      :movie="movie">

      <md-card-media >
        <img
          src="{movie.images[0].url}}"
          alt="People"
        />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ movie.title }}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div class="md-div-switch">
            <md-switch v-model="isLike">Me gusta</md-switch>
            <md-switch v-model="isView">La he visto</md-switch>
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
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data: () => ({
    isLike: false,
    isView: false,
    movies: null
  }),

  created() {
    this.$store.commit("getMovies");
    this.movies = this.$store.state.movie;
  },
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