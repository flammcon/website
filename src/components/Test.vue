<template>
  <div class="container">
    <div class="item seed1">seed1</div>
    <div class="item seed2">seed2</div>
    <div class="item seed3">seed3</div>
    <div class="item seed4">seed4</div>
    <div class="item seed5">seed5</div>
    <div class="item seed6">seed6</div>
    <div class="item seed7">seed7</div>
    <div class="item seed8">seed8</div>
    <div class="item winner18">winner18</div>
    <div class="item winner45">winner45</div>
    <div class="item winner27">winner27</div>
    <div class="item winner36">winner36</div>
    <div class="item winnerleft">winnerleft</div>
    <div class="item winnerright">winnerright</div>
    <div class="r1left">
      <div class="spacer up">spacer</div>
      <div class="spacer down">spacer</div>
    </div>
  </div>
</template>

<script>
import * as data from '../data/characters.json'

export default {
  name: 'Bracket',
  components: {
    
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
.item {
  height: 50px;
  /* border: 1px solid red; */
}

.spacer {
  border: 1px solid black;
  width: 100%;
  height: 100%;
}

.container {
  display: grid;
  grid-template-areas:  "seed1 r1left winner18 winnerleft winnerright winner27 seed2"
                        "seed8 r1left winner18 winnerleft winnerright winner27 seed7"
                        "seed5 r1left winner45 winnerleft winnerright winner36 seed6"
                        "seed4 r1left winner45 winnerleft winnerright winner36 seed3";
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr; */
  justify-content: space-evenly;
  align-items: center;
  /* align-content: center;
  text-align: center; */
}

.round1 {
  margin: 5px 0;
}
</style>
