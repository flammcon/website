<template>
  <div v-if="players">
    <v-row>
      <v-col lg="3" class="pt-0"><Pod title="ODD" :pool="odds"/></v-col>
      <v-col lg="3" class="pt-0"><Pod title="EVEN" :pool="evens"/></v-col>
      <v-col lg="3" class="pt-0"><Pod title="RED" :pool="red"/></v-col>
      <v-col lg="3" class="pt-0"><Pod title="BLUE" :pool="blue"/></v-col>
    </v-row>
    <v-row>
      <v-col lg="3" class="pb-0"><Pod title="TOP" :pool="top"/></v-col>
      <v-col lg="3" class="pb-0"><Pod title="BOTTOM" :pool="bottom"/></v-col>
      <v-col lg="3" class="pb-0"><Pod title="MIDDLE" :pool="middle"/></v-col>
      <v-col lg="3" class="pb-0"><Pod title="EDGES" :pool="edges"/></v-col>
    </v-row>
    <v-row justify="center">
      <!-- <v-btn @click="submit">Create Bracket</v-btn> -->
    </v-row>
  </div>
</template>

<script>
import Pod from './Pod.vue';
export default {
  name: 'Pods',
  components: {
    Pod
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
      //this.characters = data.characters;
      this.loading = false;
    }, 
    getImageUrl(character) {
      return require(`../assets/smash/${character.id}-${character.name.replace(/[.]/g, "")}.png`);
    },
    createPod(pod) {
      return pod.map((player, index) => {
        return {
          "name": player.name,
          "seed": index+1,
          "characterUrl": this.getImageUrl(player.character, player.characterid)
        }
      });
    }
  },
  computed: {
    odds() {
      return this.players.filter((player, index) => {
        return index%2 === 0;
      });
    },
    evens() {
      return this.players.filter((player, index) => {
        return index%2 !== 0;
      });
    },
    top() {
      return this.players.filter((player, index) => {
        return index < 4;
      });
    },
    bottom() {
      return this.players.filter((player, index) => {
        return index > 3;
      });
    },
    middle() {
      return this.players.filter((player, index) => {
        return index > 1 && index < 6;
      });
    },
    edges() {
      return this.players.filter((player, index) => {
        return index < 2 || index > 5;
      });
    },
    red() {
      return this.players.filter((player, index) => {
        return index === 0 || index === 3 || index === 4 || index === 7;
      });
    },
    blue() {
      return this.players.filter((player, index) => {
        return index === 1 || index === 2 || index === 5 || index === 6;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
