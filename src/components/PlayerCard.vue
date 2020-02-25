<template>
  <v-list-item @click="click">  
    <v-list-item-icon>
      <v-icon v-text="getIconName(index)"></v-icon>
    </v-list-item-icon>
    <v-list-item-content > 
      <v-list-item-subtitle v-text="player.name"></v-list-item-subtitle>
    </v-list-item-content>
        <v-list-item-avatar tile>
      <img :src="player.character"/>
    </v-list-item-avatar>
  </v-list-item>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: {
    player: Object,
    index: Number
  },
  data() {
    return {
      loading: false,
      // characters: []
    }
  },
  created() {
    // this.fetchData();
  },
  methods: {
    // fetchData() {
    //   this.loading = true;
    //   this.characters = data.characters;
    //   this.loading = false;
    // }, 
    // getImageUrl(name, id) {
    //   return require(`../assets/smash/${id}-${name.replace(/[.]/g, "")}.png`);
    // },
    getIconName(index) {
      return `mdi-numeric-${index+1}`;
    },
    click() { }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .container {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  height: 50px;
  margin: 2px;
}

.container:hover {
  background-color: aliceblue;
}

.name {
  margin-left: 10px;
}

img {
  width: 50px;
  height: 50px;
  background-color: gold;
  box-sizing: border-box;
}

#player {
  display: flex;
  align-items: center;
  border: 1px solid;
  width: 150px;
}

#rank {
  margin-right: 10px;
} */
</style>
