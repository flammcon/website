<template>
  <v-card class="mx-auto" height="100%" tile>
    <v-list>
      <v-subheader>{{title}}</v-subheader>
      <v-list-item-group v-model="pool" color="primary">
        <draggable v-model="pool" group="pool" @start="drag=true" @end="drag=false">
          <PlayerCard v-for="(player, index) in pool" :key="index" :info="player" :index="index"/>
        </draggable>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import * as data from '../data/characters.json'
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
    pool: {
      type: Array,
      default: function() { return [] }
    }
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

</style>
