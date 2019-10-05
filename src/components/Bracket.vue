<template>
  <div class="container">
    <div id="round1-left" class="round1">
      <BracketMatch class="game" />
      <BracketMatch class="game" />
    </div>
    <div id="round2-left">
      <BracketMatch class="game" />
    </div>
    <div id="championship" class="ship">
      <BracketMatch class="game" :isChampionship="true"/>
    </div>
    <div id="round2-right">
      <BracketMatch class="game" :reverse="true"/>
    </div>
    <div id="round1-right" class="round1">
      <BracketMatch class="game" :reverse="true"/>
      <BracketMatch class="game" :reverse="true"/>
    </div>
  </div>
</template>

<script>
import * as data from '../data/characters.json'
import BracketMatch from './BracketMatch.vue';
export default {
  name: 'Bracket',
  components: {
    BracketMatch
  },
  props: {
    players: Array
  },
  data() {
    return {
      loading: false,
      characters: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.characters = data.characters;
      this.loading = false;
    }, 
    getImageUrl(character) {
      return require(`../assets/smash/${character.id}-${character.name.replace(/[.]/g, "")}.png`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  height: 300px;
  /* border: 1px solid; */
  justify-content: space-between;
}

.round1 {
  display: flex;
  flex-direction: column;
}

.game {
  /* border: 1px solid red; */
  height: 100%;
  justify-content: space-around;
}

.ship {
  display:inline-block;
  width: 450px;
  /* border: 1px solid yellow; */
  /* align-content: center;
  align-items: center; */
  align-self: center;
  /* justify-content: center;
  justify-items: center;
  justify-self: center; */
}
</style>
