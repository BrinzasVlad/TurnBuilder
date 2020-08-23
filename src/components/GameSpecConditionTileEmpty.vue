<template>
    <div class="game-spec-condition-tile-empty  display-row">
      <game-spec-selector-value-tile
        :selector="condition.tileSelector"
        :specialOptions="specialOptions"
        @change="(newSelector) => tileSelectorChange(newSelector)"
      />
      <span class="keep-whitespace"> is empty</span>
    </div>
</template>

<script>
import ConditionTileEmpty from '@/js-classes/ConditionTileEmpty'
import GameSpecSelectorValueTile from './GameSpecSelectorValueTile.vue'

export default {
  name: 'GameSpecConditionTileEmpty',
  props: {
    condition: {
      type: ConditionTileEmpty,
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
    text: () => 'tile ... is empty',
    conditionClass: () => ConditionTileEmpty
  },
  methods: {
    tileSelectorChange (newSelector) {
      this.condition.tileSelector = newSelector
      this.$emit('change', this.condition)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
