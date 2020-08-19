<template>
    <div class="game-spec-selector-value-number" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-value-number-type"
        :clearable="false"
        :options="numberSelectorsList"
        :value="currentOption"
        @input="(newOption) => selectionChange(newOption.selectorClass)"
        label="text"
      >
        <template #selected-option="{ component }">
          <component
            :is="component"
            :selector="selector"
            @change="(newChildSelectorValue) => childSelectorChange(newChildSelectorValue)" />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import GameSpecSelectorValueNumberInput from './GameSpecSelectorValueNumberInput.vue'
import SelectorValue from '@/utils/SelectorValue'

export default {
  name: 'GameSpecSelectorValueNumber',
  props: {
    selector: {
      type: SelectorValue,
      required: false
      // Will start off undefined until the user selects something
    }
  },
  components: {
    vSelect,
    GameSpecSelectorValueNumberInput
  },
  computed: {
    console: () => console,
    numberSelectorsList () {
      const numberSelectorsToAdd = [
        GameSpecSelectorValueNumberInput
      ]
      return numberSelectorsToAdd.map((selector) => {
        return {
          component: selector.name,
          text: selector.computed.text(),
          selectorClass: selector.computed.selectorClass()
        }
      })
    },
    currentOption () {
      if (this.selector) {
        return this.numberSelectorsList.find((option) => {
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
