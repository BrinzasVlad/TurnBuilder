<template>
    <div class="game-play-grid">
      <!-- Normally, using the index as key is frowned upon.
           However, in this scenario, I believe it is appropriate,
           since tiles are fixed and are indeed uniquely identified
           by their row and column coordinates. -->
      <div v-for="(tileRow, indexRow) in tiles" :key="indexRow" class="display-row">
        <div v-for="(tile, indexCol) in tileRow" :key="indexCol">
          <!-- TODO: tiles should be square and fill the area

               One option is to use CSS and flex tricks, such as here:
               https://stackoverflow.com/a/29308467
               The advantage of this approach is that it is entirely CSS.
               However, the given answer fits width, not height, and it is
               ill-advised to employ CSS magic that one doesn't understand.

               The alternative is to simply compute the widths of each tile
               (as percentages) programmatically and apply them via :style.
               This forces more calculation on our part, but is relatively
               straightforward. -->
          <game-play-grid-tile
            :tile="tile"
            @tile-clicked="(tile) => tileClicked(tile)"
            @piece-clicked="(piece) => pieceClicked(piece)"
          />
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
  },
  methods: {
    tileClicked (tile) {
      // TODO
    },
    pieceClicked (piece) {
      // TODO
    }
  }
}
</script>

<style scoped>

</style>
