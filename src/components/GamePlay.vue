<template>
    <div class="game-play">
      <game-play-grid />
      <div class="game-play-sidebar">TODO: Sidebar</div>
    </div>
</template>

<script>
import GamePlayGrid from './GamePlayGrid.vue'

export default {
  name: 'GamePlay',
  beforeCreate: function () {
    this.$store.commit('gamePlaySet')
    this.$store.dispatch('gameStart')
  },
  destroyed: function () {
    this.$store.commit('gamePlayReset')
  },
  components: {
    GamePlayGrid
  },
  computed: {
    console: () => console
  }
}
</script>

<style scoped>
.game-play {
  display: flex;
  flex-direction: row;
}
.game-play-grid {
  flex-grow: 80;
  height: 100%;
}
.game-play-sidebar {
  flex-grow: 20;
  min-width: 15rem;
  background-color: lightgreen;
  height: 100%;
}
</style>
