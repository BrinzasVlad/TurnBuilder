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
        @change="(newAttributeSelector) => attributeSelectorChange(newAttributeSelector)"
      />
      <span class="keep-whitespace"> by </span>
      <input type="number" v-model.number.lazy="numberValue" />
    </div>
</template>

<script>
import EffectChangeAttributeBy from '@/js-classes/EffectChangeAttributeBy'
import vSelect from 'vue-select'
import GameSpecSelectorAttribute from './GameSpecSelectorAttribute.vue'

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
    GameSpecSelectorAttribute
  },
  data () {
    return {
      lastSelectedOption: 'increase'
    }
  },
  computed: {
    console: () => console,
    text: () => 'increase/decrease the value of ... by ...',
    effectClass: () => EffectChangeAttributeBy,
    selectOptions: () => ['increase', 'decrease'],
    currentOption () {
      if (this.effect.valueToChangeBy === undefined || this.effect.valueToChangeBy === 0) return this.lastSelectedOption
      else if (this.effect.valueToChangeBy > 0) return 'increase'
      else return 'decrease'
    },
    numberValue: {
      get () {
        if (this.effect.valueToChangeBy === undefined) return null
        else return Math.abs(this.effect.valueToChangeBy)
      },
      set (newValue) {
        if (this.currentOption === 'increase') this.effect.valueToChangeBy = newValue
        else this.effect.valueToChangeBy = -newValue

        this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
      }
    }
  },
  methods: {
    increaseDecreaseChange (newOption) {
      this.lastSelectedOption = newOption
      if (this.effect.valueToChangeBy !== undefined) {
        this.effect.valueToChangeBy *= -1 // Since the selection changed, the sign got reversed
      }
    },
    attributeSelectorChange (newAttributeSelector) {
      this.effect.attributeSelector = newAttributeSelector
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
