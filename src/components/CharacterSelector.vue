<template>
  <div id="characters">
    <div class="character" v-for="character in characters" :key="character.id">
      <img :src="getImageUrl(character)" :alt="character.name"/>
      <div class="name">{{character.name.toUpperCase()}}</div>
    </div>
  </div>
</template>

<script>
import { mapState /*, mapActions*/ } from 'vuex'

export default {
  name: 'CharacterSelector',
  props: {
  },
  created() {
    //this.fetchData();
    this.$store.dispatch('loadCharacters')
  },
  computed: mapState({
    characters: state => state.characters
  }),
  methods: {
    fetchData() {
      // this.loading = true;
      // this.characters = data.characters;
      // this.loading = false;
    }, 
    getImageUrl(character) {
      return require(`../assets/smash/${character.id}-${character.name.replace(/[.]/g, "")}.png`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
img {
  width: 100px;
  height: 100px;
  background-color: gold;
  box-sizing: border-box;
}
img:hover {
  border: 3px solid red;
  background-color: deepskyblue;
}

#characters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.character {
  width: 100px;
  height: 100px;
  margin: 1px;
  position: relative;
  float: left;
}

.name {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  font-weight: bolder;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  text-align: center;
  left: 0;
  width: 100%;
  bottom: 5px;
  color: white;
  text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
}
</style>
