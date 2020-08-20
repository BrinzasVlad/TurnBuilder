<template>
    <div class="game-play-grid">
      <!-- Normally, using the index as key is frowned upon.
           However, in this scenario, I believe it is appropriate,
           since tiles are fixed and are indeed uniquely identified
           by their row and column coordinates. -->
      <div v-for="(tileRow, indexRow) in tiles" :key="indexRow" class="display-row">
        <div v-for="(tile, indexCol) in tileRow" :key="indexCol">
          <game-play-grid-tile :tile="tile" />
        </div>
      </div>
    </div>
</template>

<script>
import GamePlayGridTile from './GamePlayGridTile.vue'

export default {
  name: 'GamePlayGrid',
  components: {
    GamePlayGridTile
  },
  computed: {
    console: () => console,
    tiles () { return this.$store.state.gamePlay.grid.tiles }
  }
}
</script>

<style scoped>

</style>
