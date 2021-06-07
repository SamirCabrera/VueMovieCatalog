<template>
  
  <div>
      <md-card md-with-hover class="md-card-main">

      <md-card-media>
        <img src="https://media-exp3.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk" alt="People">
      </md-card-media>

      <md-card-header>

        <div class="md-title">Titulo de pelicula</div>

      </md-card-header>

      <md-card-expand>

          <md-button class="md-accent">Eliminar de esta lista</md-button>

      </md-card-expand>

    </md-card>

  </div>

</template>

<script>
export default {
    name: 'MovieToViewLater'
}
</script>

<style scoped>

    .md-card-media img {
        width: 10%;
    }

    .md-card-main {
        margin: 32px;
    }

</style>