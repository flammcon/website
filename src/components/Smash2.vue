<template>
  <v-container class="smash">
    <h1>Free-for-all Results</h1>
    <h1 v-if="loading">Loading...</h1>
    <div class="table">
      <v-list dense>
        <draggable v-model="players" group="people" @start="drag=true" @end="drag=false">
          <!-- <v-list-item v-for="player in players" :key="player.characterid">  
            <v-list-item-avatar tile>
              <img :src="getImageUrl(player.character, player.characterid)" :alt="player.character"/>
            </v-list-item-avatar>
            <v-list-item-content>
              {{player.name}}
            </v-list-item-content>
          </v-list-item> -->
          <PlayerCard v-for="(player, index) in players" :key="player.characterid" :info="player" :index="index"/>
        </draggable>
      </v-list>
      <button v-on:click="submit">Submit</button>
      <Bracket :players="players"/>
    </div>
  </v-container>
</template>

<script>
import * as data from '../data/Sept19/Sept19.json'
import draggable from 'vuedraggable'
import PlayerCard from './PlayerCard.vue'
import Bracket from './Bracket.vue';

export default {
  name: 'Smash',
  components: {
    PlayerCard,
    Bracket,
    draggable
  },
  props: {
  },
  data() {
    return {
      loading: false,
      players: [],
      seeds: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.players = data.players;
      this.loading = false;
    },
    submit() {
      // console.log(this.players);
    },
    getImageUrl(name, id) {
      return require(`../assets/smash/${id}-${name.replace(/[.]/g, "")}.png`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.smash {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
}

.table {
  display: flex;
  flex-direction: row;
  align-items: center;
} */
</style>
