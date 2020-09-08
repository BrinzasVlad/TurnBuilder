<template>
    <div class="game-spec-selector-value-piece-at  display-row">
      <span class="keep-whitespace">the piece at </span>
      <game-spec-selector-value-tile
        :selector="selector.tileSelector"
        :specialOptions="specialOptions"
        @change="(newTileSelector) => tileSelectorChange(newTileSelector)"
      />
    </div>
</template>

<script>
import SelectorValueExactPiece from '@/js-classes/SelectorValueExactPiece'
import GameSpecSelectorValueTile from './GameSpecSelectorValueTile.vue'

export default {
  name: 'GameSpecSelectorValuePieceAt',
  props: {
    selector: {
      type: SelectorValueExactPiece,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    GameSpecSelectorValueTile
  },
  computed: {
    console: () => console,
    text: () => 'the piece at ...',
    selectorClass: () => SelectorValueExactPiece
  },
  methods: {
    tileSelectorChange (newTileSelector) {
      this.selector.tileSelector = newTileSelector
      this.$emit('change', this.selector)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
