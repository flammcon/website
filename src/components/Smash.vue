<template>
  <v-container class="ma-3" fluid>
    <v-row justify="center">
      <h1>Smash</h1>
    </v-row>
    <v-row align="stretch" dense>
      <v-col lg="2" >
        <v-col>
          <v-card class="mx-auto" height="100%" tile>
            <v-list>
              <v-subheader>FFA RESULTS</v-subheader>
              <v-list-item-group v-model="players" color="primary">
                <draggable v-model="players" group="people" @start="drag=true" @end="drag=false">
                  <PlayerCard v-for="(player, index) in players" :key="player.characterid" :info="player" :index="index"/>
                </draggable>
              </v-list-item-group>
            </v-list>
            <v-card-actions class="justify-center">
              <v-btn @click="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-col>
      <v-col lg="10">
        <Pods :players="players"/>
      </v-col>
    </v-row>
    <v-row>
      <v-card tile>
        <Bracket :players="seeds"/>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import * as data from '../data/Sept19/Sept19.json';
import SmashApi from '../api/smash';
import draggable from 'vuedraggable';
import PlayerCard from './PlayerCard.vue';
import Bracket from './Bracket.vue';
import Pods from './Pods.vue';

export default {
  name: 'Smash',
  components: {
    Bracket,
    PlayerCard,
    Pods,
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
      this.seeds = this.players.map((player, index) => {
        return {
          "name": player.name,
          "seed": index+1,
          "characterUrl": this.getImageUrl(player.character, player.characterid)
        }
      });
      // console.log(this.seeds);
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
</style>
