<template>
  <div class="list" v-if="pokeTypeUrl">
        <article 
          v-for="(pokemon, index) in pokemonsFiltered"
          :key="'poke'+index"
          @click="setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)">
          <h5 class="pokeName">{{ pokemon.name }}</h5>
            <img class="pokeImageLarge" :src="imgUrl + pokemon.id + '.png'" width="120" height="120" alt="">
            <img class="pokeImage" :src="imgUrl + pokemon.id + '.png'" width="80" height="80" alt="">
          </article>
          <div id="scroll-trigger" ref="infinitescrolltrigger">
            <i class="fas fa-spinner fa-spin"></i>
          </div>
  </div>
  <div class="list" v-else>
        <article 
          v-for="(pokemon, index) in pokemons"
          :key="'poke'+index"
          @click="setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)">
          <h5 class="pokeName">{{ pokemon.name }}</h5>
            <img class="pokeImageLarge" :src="imgUrl + pokemon.id + '.png'" width="120" height="120" alt="">
            <img class="pokeImage" :src="imgUrl + pokemon.id + '.png'" width="80" height="80" alt="">
          </article>
          <div id="scroll-trigger" ref="infinitescrolltrigger">
            <i class="fas fa-spinner fa-spin"></i>
          </div>
  </div>

  
</template>

<script>
  export default {
    props: [
      'imageUrl',
      'pokeUrl',
      'pokeTypeUrl'
    ],
    data: () => {
      return {
        pokemons: [],
        pokemonsFiltered: [],
        nextUrl: '',
        currentUrl: '',
        imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
        colorType:'',
      }
    },
    watch:{
      'pokeTypeUrl'(url){
        this.handleFilter(url);
      }
    },
    methods: {
      async fetchData(){
        const axios = require("axios").default;

        const response = await axios.get(this.currentUrl)

        // save url for scroll purpose
        this.nextUrl = response.data.next;

        response.data.results.forEach(async (pokemon) => {
          const responseDetail = await axios.get(pokemon.url);
          this.pokemons.push(responseDetail.data)
        });

        console.log(this.pokemons)
      },

      async handleFilter(url){
          const axios = require("axios").default;
          this.pokemonsFiltered = [];
          const response = await axios.get(url)

          response.data.pokemon.forEach(async (pokemon) => {
            
          const responseDetail = await axios.get(pokemon.pokemon.url);
          console.log(responseDetail.data)
          this.pokemonsFiltered.push(responseDetail.data)
        });
      },

      scrollTrigger() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0 && this.nextUrl) {
              this.next();
            }
          });
        });

        observer.observe(this.$refs.infinitescrolltrigger);
      },
      next() {
        this.currentUrl = this.nextUrl;
        this.fetchData();
      },
      setPokemonUrl(url) {
        this.$emit('setPokemonUrl', url);
      }
    },
    created() {
      this.currentUrl = this.pokeUrl;
      this.fetchData();
    },
    mounted() {
      this.scrollTrigger();
    }
  }
</script>

<style lang="scss" scoped>
  .pokeName{
    font-weight:bold;
    margin: auto;
    padding: 0 10px 0 20px;
  }

  .pokeImage{
      display:none;
    }

  .pokeImageLarge{
      display:inline;
    }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px,210px));
    grid-gap: 10px;
    width: 100%;
    max-width: 1800px;
  
    article {
      height: 150px;
      background-color: #272727;
      text-align: center;
      text-transform: capitalize;
      border-radius: 5px;
      padding: 30px 0 20px 0;
      cursor: pointer;
      color:#e3e3e3;
      margin:0;

      &:hover {
        background-color: rgb(45, 45, 45);
        color: white;
      }

      h3 {
        margin: 0;
      }
    }
  }

  #scroll-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    font-size: 2rem;
    color: black;
  }

  @media only screen and (max-width: 900px) {
    .pokeName{
      display:none;
    }

    .pokeImage{
      display:inline !important;
      padding:0;
    }

    .pokeImageLarge{
      display: none;
    }
    
    .list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px,120px));
      grid-gap: 5px;
      width: 100%;
      max-width: 1000px;

      article {
        height: 10px;
        background-color: #272727;
        text-align: center;
        border-radius: 5px;
        padding: 0 0 70px 0;
        cursor: pointer;
        color:#e3e3e3;
        margin:0;
        width:100%;

        &:hover {
          background-color: rgb(45, 45, 45);
          color: white;
        }

        h3 {
          margin: 0;
        }
      }
    }
  }
</style>

