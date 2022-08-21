<template>
  <div class="detail">
    <div class="detail-view" v-if="show">
      <div class="headerDetail">
          <button class="close" @click="closeDetail">x</button>
          <span class="favIcon" style="color:white;" v-if="!isFavorite" @click="addFavorite(pokemon.name)"><font-awesome-icon icon="fa-regular fa-heart" /></span>
          <span class="favIcon" style="color:red;" v-else @click="removeFavorite(pokemon.name)"><font-awesome-icon icon="fa-solid fa-heart-circle-check" /></span>
          <div>
            <img :src="pokemon.sprites.front_default" alt="" width="200" height="200">
            <img :src="pokemon.sprites.back_default" alt="" width="200" height="200">
          </div>
      </div>
      <div class="data">
        <h5>No. {{ pokemon.id }}</h5><h2>{{ pokemon.name }}</h2>
        <div class="property">
          <div class="left">Base Experience</div>
          <div class="right">{{ pokemon.base_experience }} EXP</div>
        </div>
        <div class="property">
          <div class="left">Weight</div>
          <div class="right">{{ pokemon.weight / 10 }} kg</div>
        </div>
        <div class="property">
          <div class="left">Height</div>
          <div class="right">{{ pokemon.height / 10 }} m</div>
        </div>

        <h4>Base Stats</h4>
        <div class="property" v-for="(stat, index) in pokemon.stats" :key="'stat'+index">
          <div class="left" style="text-transform:capitalize;">{{ stat.stat.name }}</div>
          <div class="right">{{ stat.base_stat }} </div>
        </div>

        <h3>Pokemon Types</h3>
        <div class="informations">
          <div class="info" 
            v-for="(value, index) in pokemon.types"
            :key="'value'+index">
              {{ value.type.name }}
          </div>
        </div>
        <h3>Abilities</h3>
        <div class="informations">
          <div class="info" 
            v-for="(value, index) in pokemon.abilities"
            :key="'value'+index">
            {{ value.ability.name }}
          </div>
        </div>

        <h3>All Possible Moves</h3>
        <div class="informations">
          <div class="info"
            v-for="(value, index) in pokemon.moves"
            :key="'value'+index">
            {{ value.move.name }}
          </div>
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'pokeUrlClicked',
      'imageUrl',
      'favPokemonName'
    ],
    data: () => {
      return {
        show: false,
        pokemon: {},
        encounterMethod:'',
        isFavorite: false,
        colorType:'',
      }      
    },
    methods: {
      fetchData(){
        const axios = require("axios").default;
        axios.get(this.pokeUrlClicked).then((res) => {          
          this.pokemon = res.data;
          console.log(res.data)
          console.log(this.favPokemonName)
          this.isFavorite = this.favPokemonName.includes(res.data.name) ? true : false;
          this.show = true;

          console.log(res.data.types[0].type.name)

          let type;
          switch(res.data.types[0].type.name){
            case 'normal' :
              this.colorType = "#C6C6A7";
              break;
            case 'fighting' :
              this.colorType = "#7D1F1A";
              break;
            case 'flying' :
              this.colorType = "#C6B7F5";
              break;
            case 'poison' :
              this.colorType = "#682A68";
              break;
            case 'ground' :
              this.colorType = "#927D44";
              break;
            case 'rock' :
              this.colorType = "#786824";
              break;
            case 'bug' :
              this.colorType = "#C6D16E";
              break;
            case 'ghost' :
              this.colorType = "#A292BC";
              break;
            case 'steel' :
              this.colorType = "#787887";
              break;
            case 'fire' :
              this.colorType = "#F5AC78";
              break;
            case 'water' :
              this.colorType = "#9DB7F5";
              break;
            case 'grass' :
              this.colorType = "#4E8234";
              break;
            case 'electric' :
              this.colorType = "#FAE078";
              break;
            case 'psychic' :
              this.colorType = "#FA92B2";
              break;
            case 'ice' :
              this.colorType = "#BCE6E6";
              break;
            case 'dragon' :
              this.colorType = "#4924A1";
              break;
            case 'dark' :
              this.colorType = "#A29288";
              break;
            case 'fairy' :
              this.colorType = "#F4BDC9";
              break;
            case 'shadow' :
              this.colorType = "";
              break;
            case 'unknown' :
              this.colorType = "#9DC1B7";
              break;
            case 'default' :
              this.colorType = "";
          }

          console.log(type)
        })
      },
      closeDetail() {
        this.$emit('closeDetail');
      },
      addFavorite(name){
        this.isFavorite = !this.isFavorite
        this.$emit('addFavorite', name);
      },
      removeFavorite(name){
        this.isFavorite = !this.isFavorite
        this.$emit('removeFavorite', name);
      }
    },
    created() {
      this.fetchData();
    }
  }
</script>

<style lang="scss" scoped>
  .headerDetail{
    background: v-bind(colorType);
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    border-radius: 20px 20px 30px 30px;
    
  }
  .favIcon{
    font-size: 2.5rem;
    padding-left:70%;
    cursor: pointer;
    position: sticky;
    top: 90px;
  }
  .close {
        outline: none;
        border: none;
        border-radius: 50px;
        padding: 10px 20px;
        margin-bottom: 20px;
        font-size: 2rem;
        margin-left:70%;
        cursor: pointer;
        position: sticky;
        top: 10px;
        background: #656565;
        opacity: .7;

        &:hover{
          background: #df5a5a;
        }
      }
  .detail {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 10px;
    padding-right:10px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: rgba($color: #000000, $alpha: .7);

    .detail-view {
      overflow-y: initial !important;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      width: 100%;
      max-width: 800px;
      background-color: rgb(65, 65, 65);
      border-radius: 20px;

      h2 {
        text-transform: capitalize;
        color:white;
      }

      .data {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 40px;
        color:white;

        .property {
          width: 90%;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;

          .left { float: left; }
          .right { float: right; }
        }

        .text {
          width: 90%;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;

          .left { float: left; }
          .right { float: right; }
        }


        h3 {
          width: 90%;
          color:white;
          border-bottom: 1px solid #ccc;
        }

        .informations {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 90%;

          .info {
            margin: 0 10px 10px 0;
            padding: 5px 10px;
            border-radius: 12px;
            border:1px solid white;
            font-size: 1rem;
            text-transform: capitalize;
          }
        }
      }
    }

    i {
      font-size: 2rem;
      color: #efefef;
    }
  }
</style>
