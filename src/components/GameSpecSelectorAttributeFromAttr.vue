<template>
    <div class="game-spec-selector-attribute-from-attr  display-row">
      <span class="keep-whitespace">from </span>
      <game-spec-selector-value-choose-type
        :selector="selector.valueSelector"
        :specialOptions="specialOptions"
        :forbiddenTypes="forbiddenFromValueTypes"
        @change="(newValueSelector) => valueSelectorChange(newValueSelector)"
      />
      <div v-if="valueType" class="display-row" @mousedown.stop>
      <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
        <span class="keep-whitespace"> attribute </span>
        <v-select
          :clearable="false"
          :options="attributeOptions"
          :value="currentOption"
          label="label"
          @input="(newOption) => attributeChange(newOption.attribute)"
        />
      </div>
    </div>
</template>

<script>
import AttributeTypes from '@/utils/AttributeTypes'
import Attribute from '@/js-classes/Attribute'
import SelectorAttributeFromAttr from '@/js-classes/SelectorAttributeFromAttr'
import vSelect from 'vue-select'
import GameSpecSelectorValueChooseType from './GameSpecSelectorValueChooseType.vue'

export default {
  name: 'GameSpecSelectorAttributeFromAttr',
  props: {
    selector: {
      type: SelectorAttributeFromAttr,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    vSelect,
    GameSpecSelectorValueChooseType
  },
  computed: {
    console: () => console,
    text: () => 'from ... attribute ...',
    selectorClass: () => SelectorAttributeFromAttr,
    // Number and text values cannot have attributes of their own
    forbiddenFromValueTypes: () => [AttributeTypes.NUMBER, AttributeTypes.TEXT],
    valueType () {
      if (this.selector && this.selector.valueSelector) return this.selector.valueSelector.getValueType()
      else return null
    },
    attributeOptions () {
      if (!this.valueType) return [] // If we do not have a value type, we cannot compute the possible attributes

      const attributeHashTable = {} // Only needed in one case, but linter requires we don't declare it in the case

      switch (this.valueType) {
        case AttributeTypes.PLAYER:
          return this.$store.state.gameSpec.players.attributes.map((attribute) => {
            return { label: attribute.name, attribute: attribute }
          })
        case AttributeTypes.TILE:
          return this.$store.state.gameSpec.grid.attributes.map((attribute) => {
            return { label: attribute.name, attribute: attribute }
          })
        case AttributeTypes.PIECE:
          // TODO: large case block should be refactored to be more readable
          this.$store.state.gameSpec.pieces.forEach((piece) => {
            piece.attributes.forEach((attribute) => {
              if (!attributeHashTable[attribute.name + attribute.type]) {
                // FIXME: this kind of cloning is fragile; if the constructor changes, it breaks
                // Currently, Attribute only has three properties: name, type and editable.
                // However, if more attributes are added, this code will not clone them.
                // Ideally, the constructor of Attribute should change to be a clone constructor
                // (especially since the usual constructor is not very used).
                const clonedAttribute = new Attribute(attribute.name, attribute.type, attribute.editable)
                attributeHashTable[clonedAttribute.name + clonedAttribute.type] = {
                  label: clonedAttribute.name + ' (' + clonedAttribute.type + ')',
                  attribute: clonedAttribute
                }
              }
            })
          })
          return Object.values(attributeHashTable)
        default:
          throw new Error('Attribute type ' + this.valueType + ' has no associated attribute list')
      }
    },
    currentOption () {
      if (this.selector && this.selector.attribute) {
        return this.attributeOptions.find((attributeOption) => {
          const namesEqual = this.selector.attribute.name === attributeOption.attribute.name
          const typesEqual = this.selector.attribute.type === attributeOption.attribute.type
          return namesEqual && typesEqual
        })
      } else return null
    }
  },
  methods: {
    valueSelectorChange (newValueSelector) {
      this.selector.valueSelector = newValueSelector
      this.$emit('change', this.selector)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    },
    attributeChange (newAttribute) {
      this.selector.attribute = newAttribute
      this.$emit('change', this.selector)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
