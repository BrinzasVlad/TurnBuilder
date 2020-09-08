<template>
    <div class="game-spec-effect-change-attribute-by  display-row" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        :clearable="false"
        :options="selectOptions"
        :value="currentOption"
        @input="(newOption) => increaseDecreaseChange(newOption)"
      />
      <span class="keep-whitespace"> the value of </span>
      <game-spec-selector-attribute
        :selector="effect.attributeSelector"
        :specialOptions="specialOptions"
        :expectedType="expectedType"
        @change="(newAttributeSelector) => attributeSelectorChange(newAttributeSelector)"
      />
      <span class="keep-whitespace"> by </span>
      <game-spec-selector-value-number
        :selector="effect.valueSelector"
        :specialOptions="specialOptions"
        @change="(newValueSelector) => valueSelectorChange(newValueSelector)"
      />
    </div>
</template>

<script>
import AttributeTypes from '@/utils/AttributeTypes'
import EffectChangeAttributeBy from '@/js-classes/EffectChangeAttributeBy'
import vSelect from 'vue-select'
import GameSpecSelectorAttribute from './GameSpecSelectorAttribute.vue'
import GameSpecSelectorValueNumber from './GameSpecSelectorValueNumber.vue'

export default {
  name: 'GameSpecEffectChangeAttributeBy',
  props: {
    effect: {
      type: EffectChangeAttributeBy,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    vSelect,
    GameSpecSelectorAttribute,
    GameSpecSelectorValueNumber
  },
  computed: {
    console: () => console,
    text: () => 'increase/decrease the value of ... by ...',
    effectClass: () => EffectChangeAttributeBy,
    selectOptions: () => ['increase', 'decrease'],
    currentOption () {
      if (this.effect.shouldDecrease) return 'decrease'
      else return 'increase'
    },
    expectedType: () => AttributeTypes.NUMBER
  },
  methods: {
    increaseDecreaseChange (newOption) {
      if (newOption === 'decrease') this.effect.shouldDecrease = true
      else this.effect.shouldDecrease = false

      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    },
    attributeSelectorChange (newAttributeSelector) {
      this.effect.attributeSelector = newAttributeSelector
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    },
    valueSelectorChange (newValueSelector) {
      this.effect.valueSelector = newValueSelector
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
