<template>
  <div :class="[{reverse: reverse}, 'bracket-match-item']">
    <div id="seed">{{seed}}</div>
    <img id="icon" src="../assets/smash/42-King Dedede.png"/>
    <div id="bracket-item-name">{{name}}</div>
    <div id="score">{{score}}</div>
  </div>
</template>

<script>
import * as data from '../data/characters.json'
export default {
  name: 'BracketMatchItem',
  props: {
    seed: Number,
    name: String,
    score: Number,
    url: String,
    reverse: Boolean
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
.bracket-match-item {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  background-color: lightgrey;
  width: 150px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
}

.reverse {
  flex-direction: row-reverse;
}

/* .container {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  display: grid;
  grid-template-areas:  "seed icon player score";
  grid-template-columns: 20px 50px 1fr 20px;
  grid-column-gap: 0.5rem;
  align-items: center;
  justify-content: space-around;
  background-color: lightgrey;
  width: 200px;
  /* border: 1px solid red;
  /* margin: 5px 0;
} */

#seed {
  width: 20px;
  text-align: center;
  background-color: transparent;
}

#icon {
  width: 50px;
  background-color: gold;
}

#bracket-item-name {
  width: 75px;
  text-align: left;
  margin-left: 10px;
}
#score {
  width: 20px;
}

</style>
