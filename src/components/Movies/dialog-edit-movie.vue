<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>

      <!-- <form novalidate class="md-layout" @submit.prevent="validateMovie">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Nueva pelicula</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('movieName')">
                <label for="movieName">Nombre</label>

                <md-input
                  name="movieName"
                  id="movieName"
                  autocomplete="given-name"
                  v-model="form.movieName"
                  :disabled="sending"
                />

                <span class="md-error" v-if="!$v.form.movieName.required"
                  >El nombre es requerido</span
                >

                <span class="md-error" v-else-if="!$v.form.movieName.maxLength"
                  >El maximo de caracteres es de 20</span
                >
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('description')">
                <label for="description">Descripcion</label>

                <md-input
                  name="description"
                  id="description"
                  autocomplete="family-name"
                  v-model="form.description"
                  :disabled="sending"
                />

                <span class="md-error" v-if="!$v.form.description.maxlength"
                  >El maximo de caracteres es de 40</span
                >
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('url')">
                <label for="url">Url de imagen</label>

                <md-input
                  name="url"
                  id="url"
                  autocomplete="family-name"
                  v-model="form.url"
                  :disabled="sending"
                />

                <span class="md-error" v-if="!$v.form.url.required"
                  >Es necesario la Url de la imagen</span
                >
              </md-field>
            </div>
          </div>

          <div></div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending" @click="newMovie()"
            >Añadir pelicula</md-button
          >
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="movieSaved"
        >Se añadio la pelicula {{ movie }} correctamente!</md-snackbar
      >
    </form> -->

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog()">Close</md-button>

        <button @click="x()">ver</button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogEditMovie",
  props: ["showDialog", "movie"],
  methods: {
      closeDialog() {
          this.$emit('close');
      },

      x() {
          console.log(this.movie);
      }
  }
  
};
</script>

<style>
</style>