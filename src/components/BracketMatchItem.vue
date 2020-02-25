<template>
  <v-card width=175 hover tile v-if="player">
    <v-card-actions>
      <v-icon v-if="!reverse" v-text="getIconName(player.seed)"/>
      <v-avatar tile v-if="reverse">
        <img id="icon" :src="player.character"/>
      </v-avatar>
      <v-card-text>
        {{player.name}}
      </v-card-text>
      <v-avatar tile v-if="!reverse">
        <img id="icon" :src="player.character"/>
      </v-avatar>
      <v-icon v-if="reverse" v-text="getIconName(player.seed)"/>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'BracketMatchItem',
  props: {
    player: {
      type: Object,
      default: () => { return {
        "name": "",
        "seed": 0,
        "characterUrl": require("../assets/smash/42-King Dedede.png")
      }}
    },
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
    // this.fetchData();
  },
  methods: {
    getIconName(seed) {
      return `mdi-numeric-${seed}`;
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
  width: 175px;
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
  /* background-color: gold; */
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
