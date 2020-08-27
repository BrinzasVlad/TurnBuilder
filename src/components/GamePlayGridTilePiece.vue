<template>
    <div class="game-play-grid-tile-piece">
      <img
        :src="require('../assets/icons/' + piece.icon)"
        class="piece-image"
        @mousedown="clicked"
      />
    </div>
</template>

<script>
export default {
  name: 'GamePlayGridTilePiece',
  props: {
    piece: {
      type: Object,
      required: true
    }
  },
  computed: {
    console: () => console
  },
  methods: {
    clicked () {
      this.$emit('piece-clicked', this.piece)
    }
  }
}
</script>

<style scoped>
.piece-image {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
