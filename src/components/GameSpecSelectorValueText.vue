<template>
    <div class="game-spec-selector-value-text" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-value-text-type"
        :clearable="false"
        :options="textSelectorsList"
        :value="currentOption"
        @input="(newOption) => selectionChange(newOption.selectorClass)"
        label="text"
      >
        <template #selected-option="{ component }">
          <component
            :is="component"
            :selector="selector"
            :expectedType="expectedType"
            :specialOptions="specialOptions"
            @change="(newChildSelectorValue) => childSelectorChange(newChildSelectorValue)" />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from '@/js-classes/SelectorValue'
import GameSpecSelectorValueOfAttribute from './GameSpecSelectorValueOfAttribute.vue'
import GameSpecSelectorValueTextInput from './GameSpecSelectorValueTextInput.vue'

export default {
  name: 'GameSpecSelectorValueText',
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
    GameSpecSelectorValueOfAttribute,
    GameSpecSelectorValueTextInput
  },
  computed: {
    console: () => console,
    expectedType: () => AttributeTypes.TEXT,
    textSelectorsList () {
      const textSelectorsToAdd = [
        GameSpecSelectorValueOfAttribute,
        GameSpecSelectorValueTextInput
      ]
      return textSelectorsToAdd.map((selector) => {
        return {
          component: selector.name,
          text: selector.computed.text(),
          selectorClass: selector.computed.selectorClass()
        }
      })
    },
    currentOption () {
      if (this.selector) {
        return this.textSelectorsList.find((option) => {
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
