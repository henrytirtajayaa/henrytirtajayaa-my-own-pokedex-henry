<template>
<div>
  <div id="header">
      <div>
        <a href="#top">
          <img v-on:click="isShowFav = false" src="../../public/poklogo.png" width="200" height="80" />
        </a>
      </div>
      <div class="Title">
        <h2 >{{isShowFav ? "Favorite Pokemon" : "Henry's Pokedex"}}</h2>
      </div>
      <div class="toFav">
        <a href="#top" style="color:white;">
          <span v-on:click="isShowFav = !isShowFav">{{isShowFav ? "<<Back " : "Favorite Pokemon"}}</span>
        </a>
      </div>
  </div>
  <div class="container">
    <div name="top"></div>
    <PokemonFilterByType
      @setPokemonFilter="setPokemonFilter"
    />
      <PokemonFavorite
       v-if="isShowFav"
      :pokeUrl="pokeUrl"
      :pokeTypeUrl="pokeTypeUrl"
      :favPokemonName="favoritePokemons"
      @setPokemonUrl="setPokemonUrl" />
      <PokemonList 
        v-else
        :pokeUrl="pokeUrl"
        :pokeTypeUrl="pokeTypeUrl"
        @setPokemonUrl="setPokemonUrl" />
    <PokemonDetail 
      v-if="showDetail"
      :pokeUrlClicked="pokeUrlClicked"
      :favPokemonName="favoritePokemons"
      @closeDetail="closeDetail"
      @addFavorite="addFavorite"
      @removeFavorite="removeFavorite" />
  </div>
</div>
</template>

<script>
  import PokemonList from './PokemonList.vue';
  import PokemonDetail from './PokemonDetail.vue';
  import PokemonFavorite from './PokemonFavorite.vue'
  import PokemonFilterByType from './PokemonFIlterByType.vue';

  export default {
    data: () => {
      return {
        pokeUrl: 'https://pokeapi.co/api/v2/pokemon?limit=100',
        pokeTypeUrl: '',
        pokeUrlClicked: '',
        showDetail: false,
        isShowFav: false,
        favoritePokemons: [],
      }
    },
    components: {
      PokemonFilterByType,
      PokemonList,
      PokemonDetail,
      PokemonFavorite
    },
    methods: {
      setPokemonUrl(url) {
        this.pokeUrlClicked = url;
        this.showDetail = true;
      },
      setPokemonFilter(type){
        if(type=='all'){
          this.pokeTypeUrl = ''
        }else{
          this.pokeTypeUrl = `https://pokeapi.co/api/v2/type/${type}`
        }
      },
      closeDetail() {
        this.pokeUrlClicked = '';
        this.showDetail = false;
      },
      addFavorite(name){
        this.favoritePokemons.push(name)
      },
      removeFavorite(name){
        let index = this.favoritePokemons.indexOf(name);
        if(index !== -1){
          this.favoritePokemons.splice(index, 1);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    background: radial-gradient(#373737, #424242);
    min-height: 1200px;
    background-attachment: fixed;

    font-family: 'Arial', arial;
    font-size: 1rem;
  }

  #header{
    width:100%;
    position: sticky;
    top: 0;
    display: flex;
    background: radial-gradient(#1d1d1d, #363636);
    font-family: 'Arial', arial;
    font-size: 1rem;
  }

  h1 { color: rgb(228, 228, 228); }

  .Title{
    width:75%;

    h2{
      font-weight:bold;
      color:white;
      text-align:center;
    }
  }

  .toFav{
    color:white;
    padding:20px;

    span{
      cursor:pointer;
      font-weight:bold;

      &:hover{
        color:red;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    #header{
      width:100%;
      position: sticky;
      top: 0;
      display: flex;
      background: radial-gradient(#1d1d1d, #363636);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
</style>
