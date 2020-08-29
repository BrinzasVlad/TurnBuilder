<template>
    <div class="game-play-grid">
      <div
        :class="'game-play-grid-container ' + containerClassByDimensions"
        :style="containerCSSVars"
      >
        <!-- We are intentionally omitting the key attribute in the
             below by using index as the key (frowned upon, bad practice).
             We do this knowingly because the tiles in the list will
             never ever change positions (tiles are fixed) -->
        <game-play-grid-tile
          v-for="(tile, index) in tilesLinearised"
          :key="index"

          :tile="tile"
          @tile-clicked="(tile) => tileClicked(tile)"
          @piece-clicked="(piece) => pieceClicked(piece)"
        />
      </div>
    </div>
</template>

<script>
import { debounce } from '@/utils/UserInterfaceUtils'
import GamePlayGridTile from './GamePlayGridTile.vue'

export default {
  name: 'GamePlayGrid',
  components: {
    GamePlayGridTile
  },
  data () {
    return {
      parentWidth: null,
      parentHeight: null
    }
  },
  mounted () {
    this.updateParentDimensions()
    // TODO: maybe we should not set a window listener (global) from a component
    // As https://stackoverflow.com/a/60691239 notes, there is a package
    // called vue-window-size that does exactly this already.
    window.addEventListener('resize', debounce(this.updateParentDimensions, 50))
  },
  destroyed () {
    // FIXME: make really, really sure that there are no leaks / losses here
    // It's important to make sure this works well and does not cause memory
    // leaks (for instance by failing to remove the listener because it doesn't
    // see it as exactly equal, thus leaving a dangling reference to this element)
    window.removeEventListener('resize', debounce(this.updateParentDimensions, 50))
  },
  computed: {
    console: () => console,
    tiles () { return this.$store.state.gamePlay.grid.tiles },
    gridRows () { return this.$store.state.gameSpec.grid.height },
    gridCols () { return this.$store.state.gameSpec.grid.width },
    tilesLinearised () { return this.tiles.flat() },
    containerClassByDimensions () {
      const parentAspectRatio = this.parentWidth / this.parentHeight
      const gridAspectRatio = this.gridCols / this.gridRows

      if (parentAspectRatio > gridAspectRatio) return 'height-restricted'
      else return 'width-restricted'
    },
    containerCSSVars () {
      return {
        '--grid-rows': this.gridRows,
        '--grid-cols': this.gridCols,
        '--parent-width': this.parentWidth + 'px',
        '--parent-height': this.parentHeight + 'px'
      }
    }
  },
  methods: {
    tileClicked (tile) {
      this.$store.dispatch('tileSelected', tile)
    },
    pieceClicked (piece) {
      this.$store.dispatch('pieceSelected', piece)
    },
    updateParentDimensions () {
      const { width, height } = this.$el.getBoundingClientRect()
      this.parentWidth = width
      this.parentHeight = height
    }
  }
}
</script>

<style scoped>
.game-play-grid {
  background-color: slategrey;
  overflow: auto;
}
.game-play-grid-container {
  --tile-min-size: 30px;
  --grid-min-width: calc(var(--tile-min-size) * var(--grid-cols));
  --grid-min-height: calc(var(--tile-min-size) * var(--grid-rows));
  --grid-aspect-ratio: calc(var(--grid-cols) / var(--grid-rows));
  display: grid;
  grid-template-columns: repeat(var(--grid-cols), 1fr);
  grid-template-rows: repeat(var(--grid-rows), 1fr); /* Technically not needed, but nice to specify */
}
.height-restricted {
  --height-value: max(var(--parent-height), var(--grid-min-height));
  height: var(--height-value);
  width: calc(var(--height-value) * var(--grid-aspect-ratio));
}
.width-restricted {
  --width-value: max(var(--parent-width), var(--grid-min-width));
  width: var(--width-value);
  height: calc(var(--width-value) / var(--grid-aspect-ratio));
}
</style>
