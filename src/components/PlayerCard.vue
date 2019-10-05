<template>
  <div class="container">
    <div id="rank">{{index + 1}}</div>
    <div id="player">
      <img :src="getImageUrl(info.character, info.characterid)" :alt="info.character"/>
      <!-- <img class="icon" src="../assets/smash/42-King Dedede.png"/> -->
      <div class="name">{{info.name}}</div>
    </div>
  </div>
</template>

<script>
import * as data from '../data/characters.json'
export default {
  name: 'PlayerCard',
  props: {
    info: Object,
    index: Number
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
    getImageUrl(name, id) {
      return require(`../assets/smash/${id}-${name.replace(/[.]/g, "")}.png`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* background-color:snow; */
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
}
</style>
