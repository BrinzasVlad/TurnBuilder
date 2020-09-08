<template>
    <div class="game-spec-selector-attribute-from  display-row">
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
import SelectorAttributeFrom from '@/js-classes/SelectorAttributeFrom'
import vSelect from 'vue-select'
import GameSpecSelectorValueChooseType from './GameSpecSelectorValueChooseType.vue'

export default {
  name: 'GameSpecSelectorAttributeFrom',
  props: {
    selector: {
      type: SelectorAttributeFrom,
      required: true
    },
    expectedType: {
      type: String, // TODO: this is actually an AttributeTypes entry
      required: false
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
    selectorClass: () => SelectorAttributeFrom,
    // Number and text values cannot have attributes of their own
    forbiddenFromValueTypes: () => [AttributeTypes.NUMBER, AttributeTypes.TEXT],
    valueType () {
      if (this.selector && this.selector.valueSelector) return this.selector.valueSelector.getValueType()
      else return null
    },
    attributeList () {
      if (!this.valueType) return [] // If we do not have a value type, we cannot compute the possible attributes

      let allAttributesList
      const attributeHashTable = {} // Needed only for the piece case currently

      switch (this.valueType) {
        case AttributeTypes.PLAYER:
          allAttributesList = this.$store.state.gameSpec.players.attributes
          break
        case AttributeTypes.TILE:
          allAttributesList = this.$store.state.gameSpec.grid.attributes
          break
        case AttributeTypes.PIECE:
          // Extract all unique attribute options from all existing pieces
          this.$store.state.gameSpec.pieces.forEach((piece) => {
            piece.attributes.forEach((attribute) => {
              if (!attributeHashTable[attribute.name + attribute.type]) {
                // Clone the attribute, just in case
                attributeHashTable[attribute.name + attribute.type] = new Attribute(attribute)
              }
            })
          })
          allAttributesList = Object.values(attributeHashTable)
          break
        default:
          throw new Error('Attribute type ' + this.valueType + ' has no associated attribute list')
      }

      if (this.expectedType) return allAttributesList.filter((attribute) => attribute.type === this.expectedType)
      else return allAttributesList
    },
    attributeOptions () {
      if (this.attributeList) {
        if (this.valueType === AttributeTypes.PIECE) {
          // Piece selection may mean multiple attributes with same name and different type
          // So we must display the attribute type in the label, too
          return this.attributeList.map((attribute) => {
            return { attribute, label: `${attribute.name} (${attribute.type})` }
          })
        } else {
          return this.attributeList.map((attribute) => { return { attribute, label: attribute.name } })
        }
      } else {
        return []
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
