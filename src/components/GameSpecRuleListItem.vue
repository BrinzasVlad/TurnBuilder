<template>
    <div class="game-spec-rule-list-item  display-row">
      <span class="keep-whitespace">When </span>
      <v-select
        class="rule-trigger"
        :clearable="false"
        :options="TriggerTypes.allValues"
        :value="rule.trigger"
        @input="(newTrigger) => triggerChange(newTrigger)"
      />
      <span class="keep-whitespace">, </span>
      <game-spec-effect
        :effect="rule.effect"
        :specialOptions="specialOptions"
        @change="(newEffect) => effectChange(newEffect)"
      />
    </div>
</template>

<script>
import TriggerTypes from '@/utils/TriggerTypes'
import vSelect from 'vue-select'
import GameSpecEffect from './GameSpecEffect.vue'

export default {
  name: 'GameSpecRuleListItem',
  components: {
    vSelect,
    GameSpecEffect
  },
  props: {
    rule: {
      type: Object,
      required: true
    }
  },
  computed: {
    console: () => console,
    TriggerTypes: () => TriggerTypes,
    specialOptions () { return TriggerTypes.specialOptions(this.rule.trigger) }
  },
  methods: {
    triggerChange (newTrigger) {
      this.$emit('rule-trigger-change', newTrigger)
    },
    effectChange (newEffect) {
      this.$emit('rule-effect-change', newEffect)
    }
  }
}
</script>

<style scoped>

</style>
