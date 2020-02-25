<template>
  <div v-if="players">
    <v-row>
      <v-col lg="3" class="pt-0"><Pod title="ODD" :pool="[1,3,5,7]" :interactive="interactive"/></v-col>
      <v-col lg="3" class="pt-0"><Pod title="EVEN" :pool="[2,4,6,8]" :interactive="interactive"/></v-col>
      <v-col lg="3" class="pt-0"><Pod title="RED" :pool="[1,4,5,8]" :interactive="interactive"/></v-col>
      <v-col lg="3" class="pt-0"><Pod title="BLUE" :pool="[2,3,6,7]" :interactive="interactive"/></v-col>
    </v-row>
    <v-row>
      <v-col lg="3" class="pb-0"><Pod title="TOP" :pool="[1,2,3,4]" :interactive="interactive"/></v-col>
      <v-col lg="3" class="pb-0"><Pod title="BOTTOM" :pool="[5,6,7,8]" :interactive="interactive"/></v-col>
      <v-col lg="3" class="pb-0"><Pod title="MIDDLE" :pool="[3,4,5,6]" :interactive="interactive"/></v-col>
      <v-col lg="3" class="pb-0"><Pod title="EDGES" :pool="[1,2,7,8]" :interactive="interactive"/></v-col>
    </v-row>
    <!-- <v-row justify="center">
      <v-btn @click="submit">Create Bracket</v-btn>
    </v-row> -->
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
    players: Array,
    interactive: Boolean
  },
  data() {
    return { }
  },
  methods: { },
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
      return [1,2,3,4]
      // return this.players.filter((player, index) => {
      //   return index < 4;
      // });
    },
    bottom() {
      return [5,6,7,8]
      // return this.players.filter((player, index) => {
      //   return index > 3;
      // });
    },
    middle() {
      return []
      // return this.players.filter((player, index) => {
      //   return index > 1 && index < 6;
      // });
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
