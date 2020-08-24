<template>
  <div class="game-playtest">
    <game-play />
  </div>
</template>

<script>
import GamePlay from '@/components/GamePlay.vue'

export default {
  name: 'GamePlaytest',
  components: {
    GamePlay
  }
}
</script>

<style scoped>
.game-play {
  width: 100%;
  height: 100%;
}
</style>
