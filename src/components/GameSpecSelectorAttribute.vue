<template>
    <div class="game-spec-selector-attribute" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-attribute-type"
        :clearable="false"
        :options="attributeSelectorsList"
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
            @change="(newChildSelectorValue) => childSelectorChange(newChildSelectorValue)"
          />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import SelectorAttribute from '@/js-classes/SelectorAttribute'
import GameSpecSelectorAttributeGameAttr from './GameSpecSelectorAttributeGameAttr.vue'
import GameSpecSelectorAttributeFrom from './GameSpecSelectorAttributeFrom.vue'

export default {
  name: 'GameSpecSelectorAttribute',
  props: {
    selector: {
      type: SelectorAttribute,
      required: false
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
    GameSpecSelectorAttributeGameAttr,
    GameSpecSelectorAttributeFrom
  },
  computed: {
    console: () => console,
    attributeSelectorsList () {
      const attributeSelectorsToAdd = [
        GameSpecSelectorAttributeGameAttr,
        GameSpecSelectorAttributeFrom
      ]
      return attributeSelectorsToAdd.map((selector) => {
        return {
          component: selector.name,
          text: selector.computed.text(),
          selectorClass: selector.computed.selectorClass()
        }
      })
    },
    currentOption () {
      if (this.selector) {
        return this.attributeSelectorsList.find((option) => {
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
