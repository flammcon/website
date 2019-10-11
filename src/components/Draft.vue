<template>
  <div class="draft">
    <h1>Draft</h1>
    <character-selector/>
  </div>
</template>

<script>
import * as data from '../data/characters.json'
import CharacterSelector from './CharacterSelector'
export default {
  name: 'Draft',
  components: {
    CharacterSelector
  },
  props: {
  },
  created() {
    //this.$store.dispatch('getAllCharacters')
    // this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.characters = data.characters;
      this.loading = false;
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
</style>
