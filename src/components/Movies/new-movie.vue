<template>
  <div>

    <form novalidate class="md-layout" @submit.prevent="validateMovie">

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
                  :disabled="sending"/>

                <span class="md-error" v-if="!$v.form.movieName.required"
                  >El nombre es requerido</span>

                <span class="md-error" v-else-if="!$v.form.movieName.maxLength"
                  >El maximo de caracteres es de 20</span>

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
                  :disabled="sending"/>

                <span class="md-error" v-if="!$v.form.description.maxlength"
                  >El maximo de caracteres es de 40</span>

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
                  :disabled="sending"/>

                <span class="md-error" v-if="!$v.form.url.required"
                  >Es necesario la Url de la imagen</span>

              </md-field>

            </div>

          </div>

          <div>
  
  </div>

        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>

          <md-button type="submit" class="md-primary" :disabled="sending">Añadir pelicula</md-button>

        </md-card-actions>

      </md-card>

      <md-snackbar :md-active.sync="movieSaved"
        >Se añadio la pelicula {{ movie }} correctamente!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  name: "NewMovie",

  mixins: [validationMixin],

  data: () => ({
    form: {
      movieName: null,
      description: null,
      url: null
    },

    movieSaved: false,
    sending: false,
    movie: null,
  }),

  validations: {
    form: {
      movieName: {
        required,
        maxLength: maxLength(20),
      },

      description: {
        maxLength: maxLength(40),
      },

      url: {
        required
      },

    },
  },

  methods: {

    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },

    clearForm() {
      this.$v.$reset();
      this.form.movieName = null;
      this.form.description = null;
      this.form.url = null;
    },

    saveMovie() {
      this.sending = true;

      window.setTimeout(() => {
        this.movie = `${this.form.movieName}`;
        this.movieSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },

    validateMovie() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveMovie();
      }
    },

  },
};

</script>

<style scoped>

    .md-layout {
        display: block;
    }

    .md-layout-item.md-size-50 {
        min-width: 98%;
        max-width: 50%;
        flex: 0 1 50%;
        margin: 16px;
    }
    
</style>