<template>
  <div>
      Catalog
      <Movie/>
  </div>
</template>

<script>

import Movie from '@/components/Movies/movies.vue';

export default {
    name: 'Catalog',
    components: {
      Movie
    }
}
</script>

<style>

</style>