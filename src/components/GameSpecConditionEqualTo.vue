<template>
    <div class="game-spec-condition-equal-to  display-row">
      <game-spec-selector-value-choose-type
        :selector="condition.firstTerm"
        :specialOptions="specialOptions"
        @change="(newFirstTerm) => firstTermChange(newFirstTerm)"
      />
      <span class="keep-whitespace"> is equal to </span>
      <game-spec-selector-value
        v-if="valueType"
        :selector="condition.secondTerm"
        :valueType="valueType"
        :specialOptions="specialOptions"
        @change="(newSecondTerm) => secondTermChange(newSecondTerm)"
      />
      <span v-else>...</span>
    </div>
</template>

<script>
import ConditionEqualTo from '@/js-classes/ConditionEqualTo'
import GameSpecSelectorValue from './GameSpecSelectorValue.vue'
import GameSpecSelectorValueChooseType from './GameSpecSelectorValueChooseType.vue'

export default {
  name: 'GameSpecConditionEqualTo',
  props: {
    condition: {
      type: ConditionEqualTo,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    GameSpecSelectorValueChooseType,
    GameSpecSelectorValue
  },
  computed: {
    console: () => console,
    text: () => '... is equal to ...',
    conditionClass: () => ConditionEqualTo,
    valueType () {
      if (!this.condition.firstTerm) return null
      else return this.condition.firstTerm.getValueType()
    }
  },
  methods: {
    firstTermChange (newFirstTerm) {
      this.condition.firstTerm = newFirstTerm
      this.$emit('change', this.condition)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    },
    secondTermChange (newSecondTerm) {
      this.condition.secondTerm = newSecondTerm
      this.$emit('change', this.condition)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
