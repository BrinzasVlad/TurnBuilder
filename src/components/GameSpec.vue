<!-- TODO: should contain components for specifying player / grid / state / piece / rule matters -->

<template>
    <div class="game-spec">
      <game-spec-player />
      <game-spec-grid />
      <game-spec-piece-list />
    </div>
</template>

<script>
import GameSpecPlayer from './GameSpecPlayer.vue'
import GameSpecGrid from './GameSpecGrid.vue'
import GameSpecPieceList from './GameSpecPieceList.vue'

export default {
  name: 'GameSpec',
  components: {
    GameSpecPlayer,
    GameSpecGrid,
    GameSpecPieceList
  },
  computed: {
    console: () => console
  }
}
</script>

<style scoped>

</style>
