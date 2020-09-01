<template>
    <div class="game-spec-selector-value-choose-type" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        :clearable="false"
        :options="availableOptions"
        :value="currentOption"
        :getOptionLabel="(option) => option + ' ...'"
        @input="(newType) => typeChange(newType)"
      >
        <template #selected-option="{ label: valueType }">
          <div class="display-row">
            <span class="keep-whitespace">{{ valueType }} </span>
            <game-spec-selector-value
              :selector="selector"
              :valueType="valueType"
              :specialOptions="specialOptions"
              @change="(newValueSelector) => valueSelectorChange(newValueSelector)"
            />
          </div>
        </template>
      </v-select>
    </div>
</template>

<script>
import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from '@/js-classes/SelectorValue'
import vSelect from 'vue-select'
import GameSpecSelectorValue from './GameSpecSelectorValue.vue'

export default {
  // TODO: maybe we should name this component not starting with GameSpecSelectorValue?
  // Since this component is not a subcompoment of GameSpecSelectorValue, by the Vue naming
  // conventions, we should probably pick a different name. But it does manage a SelectorValue
  // instance; if anything, it is the reverse: SelectorValue is a subcomponent of this.
  name: 'GameSpecSelectorValueChooseType',
  props: {
    selector: {
      type: SelectorValue,
      required: false
    },
    specialOptions: {
      type: Array,
      required: false
    },
    forbiddenTypes: {
      type: Array,
      required: false,
      validator: (types) => {
        let valid = true
        types.forEach((type) => { if (!AttributeTypes.allValues.includes(type)) valid = false })
        return valid
      }
    }
  },
  components: {
    vSelect,
    GameSpecSelectorValue
  },
  data () {
    return {
      selectedValueType: null
    }
  },
  computed: {
    console: () => console,
    availableOptions () {
      return AttributeTypes.allValues
        .filter((attributeType) => !this.forbiddenTypes.includes(attributeType))
    },
    currentOption () {
      // If the prop has a type, use that one. Else, use what the user picks.
      if (this.selector && this.selector.getValueType()) return this.selector.getValueType()
      else return this.selectedValueType
    }
  },
  methods: {
    typeChange (newType) {
      this.selectedValueType = newType
    },
    valueSelectorChange (newValueSelector) {
      this.$emit('change', newValueSelector)
    }
  }
}
</script>

<style scoped>

</style>
