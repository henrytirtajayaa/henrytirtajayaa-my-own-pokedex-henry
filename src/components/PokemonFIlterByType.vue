<template>
  <div class="header">
     <h3 style="color:white;text-transform:capitalize;">filter type: <span>{{this.filterValue}}</span></h3>
     <div class="informations">
          <button 
               v-on:click="handleFilterValue('all')" 
               class="info" 
               style="background:darkgrey">
               All
          </button>
          <button 
               v-on:click="handleFilterValue('normal')" 
               class="info" 
               style="background:#C6C6A7;text-decoration:capitalize;">
               normal
          </button>
          <button 
               v-on:click="handleFilterValue('fighting')" 
               class="info" 
               style="background:#7D1F1A;text-decoration:capitalize;">
               fighting
          </button>
          <button 
               v-on:click="handleFilterValue('flying')" 
               class="info" 
               style="background:#C6B7F5;text-decoration:capitalize;">
               flying
          </button>
          <button 
               v-on:click="handleFilterValue('poison')" 
               class="info" 
               style="background:#682A68;text-decoration:capitalize;">
               poison
          </button>
          <button 
               v-on:click="handleFilterValue('ground')" 
               class="info" 
               style="background:#927D44;text-decoration:capitalize;">
               ground
          </button>
          <button 
               v-on:click="handleFilterValue('rock')" 
               class="info" 
               style="background:#786824;text-decoration:capitalize;">
               rock
          </button>
          <button 
               v-on:click="handleFilterValue('bug')" 
               class="info" 
               style="background:#C6D16E;text-decoration:capitalize;">
               bug
          </button>
          <button 
               v-on:click="handleFilterValue('ghost')" 
               class="info" 
               style="background:#A292BC;text-decoration:capitalize;">
               ghost
          </button>
          <button 
               v-on:click="handleFilterValue('steel')" 
               class="info" 
               style="background:#787887;text-decoration:capitalize;">
               steel
          </button>
          <button 
               v-on:click="handleFilterValue('fire')" 
               class="info" 
               style="background:#F5AC78;text-decoration:capitalize;">
               fire
          </button>
          <button 
               v-on:click="handleFilterValue('water')" 
               class="info" 
               style="background:#9DB7F5;text-decoration:capitalize;">
               water
          </button>
          <button 
               v-on:click="handleFilterValue('grass')" 
               class="info" 
               style="background:#4E8234;text-decoration:capitalize;">
               grass
          </button>
          <button 
               v-on:click="handleFilterValue('electric')" 
               class="info" 
               style="background:#FAE078;text-decoration:capitalize;">
               electric
          </button>
          <button 
               v-on:click="handleFilterValue('ice')" 
               class="info" 
               style="background:#BCE6E6;text-decoration:capitalize;">
               ice
          </button>
          <button 
               v-on:click="handleFilterValue('dragon')" 
               class="info" 
               style="background:#4924A1;text-decoration:capitalize;">
               dragon
          </button>
          <button 
               v-on:click="handleFilterValue('dark')" 
               class="info" 
               style="background:#A29288;text-decoration:capitalize;">
               dark
          </button>
          <button 
               v-on:click="handleFilterValue('fairy')" 
               class="info" 
               style="background:#F4BDC9;text-decoration:capitalize;">
               fairy
          </button>
     </div>
  </div>
</template>

<script>
  export default {
    props: [
    ],
    data: () => {
      return {
        filterValue: '',
      }
    },
    methods: {
      handleFilterValue(type){
          this.filterValue = type;
          this.$emit('setPokemonFilter', this.filterValue);
      }
    }
  }
</script>

<style lang="scss" scoped>
     .header{
          width:100%;
          top: 0;
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
            color: #fff;
            font-size: 1rem;
            cursor: pointer;
            text-transform: capitalize;
          }

        }
</style>
