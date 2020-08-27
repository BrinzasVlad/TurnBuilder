<template>
    <div class="game-spec-selector-value">
      <component
        :is="component.name"
        :selector="selector"
        :specialOptions="specialOptions"
        @change="(newChildSelectorValue) => childSelectorChange(newChildSelectorValue)"
      />
    </div>
</template>

<script>
import vSelect from 'vue-select'
import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from '@/js-classes/SelectorValue'
import GameSpecSelectorValueNumber from './GameSpecSelectorValueNumber.vue'
import GameSpecSelectorValueText from './GameSpecSelectorValueText.vue'
import GameSpecSelectorValuePlayer from './GameSpecSelectorValuePlayer.vue'
import GameSpecSelectorValueTile from './GameSpecSelectorValueTile.vue'
import GameSpecSelectorValuePiece from './GameSpecSelectorValuePiece.vue'

export default {
  name: 'GameSpecSelectorValue',
  props: {
    selector: {
      type: SelectorValue,
      required: false
    },
    valueType: {
      validator: (value) => AttributeTypes.allValues.includes(value),
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    vSelect,
    GameSpecSelectorValueNumber,
    GameSpecSelectorValueText,
    GameSpecSelectorValuePlayer,
    GameSpecSelectorValueTile,
    GameSpecSelectorValuePiece
  },
  computed: {
    console: () => console,
    component () {
      switch (this.valueType) {
        case AttributeTypes.NUMBER: return GameSpecSelectorValueNumber
        case AttributeTypes.TEXT: return GameSpecSelectorValueText
        case AttributeTypes.PLAYER: return GameSpecSelectorValuePlayer
        case AttributeTypes.TILE: return GameSpecSelectorValueTile
        case AttributeTypes.PIECE: return GameSpecSelectorValuePiece
        default: throw new Error('Value type ' + this.valueType + ' does not have an associated selector component')
      }
    }
  },
  methods: {
    childSelectorChange (newSelectorValue) {
      this.$emit('change', newSelectorValue)
    }
  }
}
</script>

<style scoped>

</style>
