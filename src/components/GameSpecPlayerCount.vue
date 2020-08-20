<template>
  <div class="game-spec-player-count">
    <label for="playerCount">Number of players: </label>
    <input id="playerCount" type="number" v-model.number="playerCount" />
  </div>
</template>

<script>
export default {
  name: 'GameSpecPlayerCount',
  computed: {
    console: () => console,
    playerCount: {
      get () {
        return this.$store.state.gameSpec.players.number
      },
      set (value) {
        this.$store.commit('setPlayerCount', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
