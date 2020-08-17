<template>
    <div class="game-spec">
      <game-spec-player />
      <game-spec-grid />
      <game-spec-game-attr />
      <game-spec-piece-list />
      <game-spec-rule-list />
    </div>
</template>

<script>
import GameSpecPlayer from './GameSpecPlayer.vue'
import GameSpecGrid from './GameSpecGrid.vue'
import GameSpecGameAttr from './GameSpecGameAttr.vue'
import GameSpecPieceList from './GameSpecPieceList.vue'
import GameSpecRuleList from './GameSpecRuleList.vue'

export default {
  name: 'GameSpec',
  components: {
    GameSpecPlayer,
    GameSpecGrid,
    GameSpecGameAttr,
    GameSpecPieceList,
    GameSpecRuleList
  },
  computed: {
    console: () => console
  }
}
</script>

<style scoped>

</style>
