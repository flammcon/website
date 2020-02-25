<template>
  <v-card class="mx-auto" height="100%" tile dense>
    <v-list>
      <v-subheader class="pod-header">
        {{title}}
        <v-switch v-model="locked" @change="updateScores" :disabled="!interactive" dense/>
      </v-subheader>
      <v-list v-model="players" :disabled="!interactive || locked">
        <draggable v-model="players" group="players" @start="drag=true" @end="drag=false">
          <PlayerCard v-for="(player, index) in players" :key="index" :player="player" :index="index"/>
        </draggable>
      </v-list>
      <!-- <v-list v-model="players" v-if="!interactive" disabled>
        <PlayerCard v-for="(player, index) in players" :key="index" :player="player" :index="index"/>
      </v-list> -->
    </v-list>
  </v-card>
</template>

<script>
import draggable from 'vuedraggable'
import PlayerCard from './PlayerCard.vue'

export default {
  name: 'Pod',
  components: {
    draggable,
    PlayerCard
  },
  props: {
    title: String,
    pool: Array,
    interactive: Boolean
  },
  data() {
    return {
      locked: false,
      pod: []
    }
  },
  watch: { 
    interactive(newVal, oldVal) { 
      if (!newVal) {
        this.locked = false;
      }
    }
  },
  computed: {
    players: {
      get() {
        if (this.interactive && this.pod.length > 0) {
          return this.pod;
        } else if (this.pod.length > 0){
          this.pod = [];
        }
  
        return this.$store.state.players.filter((player, index) => this.pool.includes(index+1));        
      },
      set(players) {
        this.pod = players;
      }
    }
  },
  methods: {
    updateScores(event) {
      for (let [index, player] of this.players.entries()) {
        const points = event ? (index+1) : -1 * (index+1);
        this.$store.dispatch('updatePlayerPodScore', {id: player.id, score: points});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pod-header {
  justify-content: space-between;
}
</style>
