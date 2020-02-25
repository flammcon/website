<template>
  <v-container class="ma-3" fluid>
    <v-row justify="center">
      <h1>Smash</h1>
    </v-row>
    <v-row align="stretch" dense>
      <v-col lg="2" class="pa-3" >
        <v-card class="mx-auto vert-flex" height="100%" tile>
          <v-list>
            <v-subheader class="pod-header">
              FFA RESULTS
              <v-switch v-model="locked" @change="clear" dense/>
            </v-subheader>
            <v-list v-model="players" :disabled="locked">
              <draggable v-model="players" group="people" @start="drag=true" @end="drag=false">
                <PlayerCard v-for="(player, index) in players" :key="player.id" :player="player" :index="index"/>
              </draggable>
            </v-list>
          </v-list>
          <v-card-actions class="justify-center grow pt-0">
            <v-btn @click="submit">Create Bracket</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="10" class="pa-3">
        <Pods :players="players" :interactive="locked"/>
      </v-col>
    </v-row>
    <v-row class="pa-3" dense>
      <v-card class="mx-auto hor-flex" width="100%" tile>
        <v-chip-group class="justify-center">
          <PlayerPodScore v-for="(player, index) in sortedPlayers" :player="player" :key="index"/>
        </v-chip-group>
      </v-card>
    </v-row>
    <v-row align="stretch" class="pa-3" dense>
      <Bracket :players="seeds" v-show="seeds.length > 0"/>  
      <!-- <v-card class="mx-auto" width="100%" tile>
        <Bracket :players="seeds"/>
      </v-card> -->
    </v-row>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';
import PlayerCard from './PlayerCard.vue';
import Bracket from './Bracket.vue';
import Pods from './Pods.vue';
import PlayerPodScore from './PlayerPodScore.vue';
// import { mapState /*, mapActions*/ } from 'vuex'

export default {
  name: 'Smash',
  components: {
    Bracket,
    PlayerCard,
    Pods,
    PlayerPodScore,
    draggable
  },
  props: {
  },
  data() {
    return {
      locked: false,
      seeds: [],
      color: "secondary"
    }
  },
  created() {
    this.$store.dispatch('loadPlayers')
    //this.fetchData();
  },
  computed: {
    players: {
      set(players) {
        this.$store.commit('setPlayers', players);
      },
      get() {
        return this.$store.state.players;
      }
    },
    sortedPlayers() {
      return this.players.slice(0).sort((a, b) => {
        return a.score > b.score ? 1 : -1;
      });
    }
  },
  methods: {
    clear() {
      this.$store.commit("clearPlayerPodScores");
    },
    submit() {
      this.seeds = this.sortedPlayers.map((player, index) => {
        return {
          "name": player.name,
          "seed": index+1,
          "character": player.character
        }
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vert-flex {
    display: flex;
    flex-direction: column;
  }
  .hor-flex {
    display: flex;
    justify-content: center;
  }
  .pod-header {
    justify-content: space-between;
}
</style>
