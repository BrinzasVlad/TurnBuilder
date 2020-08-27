<template>
    <div class="game-spec-selector-value-piece" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-value-piece-type"
        :clearable="false"
        :options="pieceSelectorsList"
        :value="currentOption"
        @input="(newOption) => selectionChange(newOption.selectorClass)"
        label="text"
      >
        <template #selected-option="{ component }">
          <component
            :is="component"
            :selector="selector"
            :specialOptions="specialOptions"
            @change="(newChildSelectorValue) => childSelectorChange(newChildSelectorValue)" />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import SpecialOptions from '@/utils/SpecialOptions'
import SelectorValue from '@/js-classes/SelectorValue'
import GameSpecSelectorValuePieceSelected from './GameSpecSelectorValuePieceSelected.vue'

export default {
  name: 'GameSpecSelectorValuePiece',
  props: {
    selector: {
      type: SelectorValue,
      required: false
      // Will start off undefined until the user selects something
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    vSelect,
    GameSpecSelectorValuePieceSelected
  },
  computed: {
    console: () => console,
    pieceSelectorsList () {
      const pieceSelectorsToAdd = []
      if (this.specialOptions && this.specialOptions.includes(SpecialOptions.PIECE_SELECTED)) {
        pieceSelectorsToAdd.push(GameSpecSelectorValuePieceSelected)
      }

      return pieceSelectorsToAdd.map((selector) => {
        return {
          component: selector.name,
          text: selector.computed.text(),
          selectorClass: selector.computed.selectorClass()
        }
      })
    },
    currentOption () {
      if (this.selector) {
        return this.pieceSelectorsList.find((option) => {
          const currentSelectorClass = this.selector.constructor
          return option.selectorClass === currentSelectorClass
        })
      } else return null
    }
  },
  methods: {
    childSelectorChange (newSelectorValue) {
      this.$emit('change', newSelectorValue)
    },
    selectionChange (NewSelectorClass) {
      this.$emit('change', new NewSelectorClass())
    }
  }
}
</script>

<style scoped>

</style>
