<template>
  <div :class="isChampionship ? 'championship' : 'match'">
    <BracketMatchItem :class="{left: isChampionship}" name="Marlene" :seed="1" :score="0" :reverse="reverse"/>
    <div v-if="isChampionship" class="champion" />
    <BracketMatchItem :class="{right: isChampionship}" name="Nick" :seed="8" :score="0" :reverse="isChampionship ? true : reverse"/>
  </div>
</template>

<script>
import * as data from '../data/characters.json'
import BracketMatchItem from './BracketMatchItem.vue';
export default {
  name: 'BracketMatch',
  components: {
    BracketMatchItem
  },
  props: {
    isChampionship: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
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
.match {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
  width: 175px;
}

.right {
  float: right;
}
/* .championship {
  display: flex;
  flex-direction: row;
  border: 1px solid yellow;
}

.left {
  margin-top: 0px;
}

.right {
  margin-top: 75px;
} */

.champion {
  height: 50px;
}
</style>
