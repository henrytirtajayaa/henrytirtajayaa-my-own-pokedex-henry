<template>
  <div id="app">
    <PokemonDex />
  </div>
</template>

<script>
import PokemonDex from './components/PokemonDex.vue'

export default {
  components: {
    PokemonDex
  }
}
</script>

<style lang="scss">
  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');

  body {
    margin: 0;
    padding: 0;
  }
</style>
