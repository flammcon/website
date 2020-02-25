<template>
  <v-chip outlined draggable :close="tied" close-icon="mdi-plus" @click:close="player.score -= 0.1">
    {{player.name}}
    <v-avatar right><span>{{Math.round(player.score)}}</span></v-avatar>
  </v-chip>
</template>

<script>
export default {
  name: 'PlayerPodScore',
  props: {
    player: Object
  },
  computed: {
    tied() {
      return this.$store.state.players.filter((player) => player.score === this.player.score).length > 1;
    }
  }
}
</script>

<style>

</style>