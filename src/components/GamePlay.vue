<template>
    <div class="game-play">
      <game-play-grid />
    </div>
</template>

<script>
import GamePlayGrid from './GamePlayGrid.vue'

export default {
  name: 'GamePlay',
  beforeCreate: function () {
    this.$store.commit('gamePlaySet')
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

</style>
