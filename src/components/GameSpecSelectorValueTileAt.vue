<template>
    <div class="game-spec-selector-value-tile-at  display-row">
      <span class="keep-whitespace">tile at row </span>
      <game-spec-selector-value-number
        :selector="selector.rowSelector"
        :specialOptions="specialOptions"
        @change="(newRowSelector) => rowSelectorChange(newRowSelector)"
      />
      <span class="keep-whitespace"> and column </span>
      <game-spec-selector-value-number
        :selector="selector.columnSelector"
        :specialOptions="specialOptions"
        @change="(newColumnSelector) => columnSelectorChange(newColumnSelector)"
      />
    </div>
</template>

<script>
import SelectorValueExactTile from '@/js-classes/SelectorValueExactTile'
import GameSpecSelectorValueNumber from './GameSpecSelectorValueNumber.vue'

export default {
  name: 'GameSpecSelectorValueTileAt',
  props: {
    selector: {
      type: SelectorValueExactTile,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    GameSpecSelectorValueNumber
  },
  computed: {
    console: () => console,
    text: () => 'tile at row ... and column ...',
    selectorClass: () => SelectorValueExactTile
  },
  methods: {
    rowSelectorChange (newRowSelector) {
      this.selector.rowSelector = newRowSelector
      this.$emit('change', this.selector)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    },
    columnSelectorChange (newColumnSelector) {
      this.selector.columnSelector = newColumnSelector
      this.$emit('change', this.selector)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
