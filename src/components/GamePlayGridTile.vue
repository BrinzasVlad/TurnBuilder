<template>
    <div class="game-play-grid-tile" @mousedown="clicked">
      <game-play-grid-tile-piece
        v-if="tile.Content"
        :piece="tile.Content"
        @piece-clicked="(piece) => pieceClicked(piece)"
      />
    </div>
</template>

<script>
import GamePlayGridTilePiece from './GamePlayGridTilePiece.vue'

export default {
  name: 'GamePlayGridTile',
  components: {
    GamePlayGridTilePiece
  },
  props: {
    tile: {
      type: Object,
      required: true
    }
  },
  computed: {
    console: () => console
  },
  methods: {
    clicked () {
      this.$emit('tile-clicked', this.tile)
    },
    pieceClicked (piece) {
      this.$emit('piece-clicked', this.piece)
    }
  }
}
</script>

<style scoped>
.game-play-grid-tile {
  border: 2px solid black;
  border-radius: 15%;
  background-color: lightcyan;
}
</style>
