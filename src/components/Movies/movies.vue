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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>

  </div>
</template>

<script>
export default {
    name: 'Movie',
    data: () => ({
        isLike: false,
        isView: false
    })
}
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