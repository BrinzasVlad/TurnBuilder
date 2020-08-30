<template>
    <div class="game-play-short-display-piece">
      <img :src="require('@/assets/icons/' + piece.icon)" />
      <span class="keep-whitespace">{{ piece.pieceTypeName }}</span>
    </div>
</template>

<script>
export default {
  name: 'GamePlayShortDisplayPiece',
  props: {
    piece: {
      type: Object,
      required: true
      // TODO: maybe add custom validators?
    }
  },
  computed: {
    console: () => console
  }
}
</script>

<style scoped>
.game-play-short-display-piece {
  display: inline;
}
</style>
