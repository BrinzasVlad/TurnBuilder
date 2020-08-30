<template>
    <div class="game-play-grid-tile-piece">
      <img
        :src="require('../assets/icons/' + piece.icon)"
        class="piece-image"
        @mousedown="clicked"
        @mouseenter="viewed"
        @mouseleave="stopViewed"
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
    },
    viewed () {
      this.$emit('piece-viewed', this.piece)
    },
    stopViewed () {
      this.$emit('piece-viewed', null)
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
