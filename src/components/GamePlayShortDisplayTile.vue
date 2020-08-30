<template>
    <div class="game-play-short-display-tile">
      <span class="keep-whitespace">Tile at row {{ tile.Row }}, column {{ tile.Column }}</span>
    </div>
</template>

<script>
export default {
  name: 'GamePlayShortDisplayTile',
  props: {
    tile: {
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
.game-play-short-display-tile {
  display: inline;
}
</style>
