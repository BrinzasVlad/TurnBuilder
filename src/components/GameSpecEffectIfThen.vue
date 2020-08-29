<template>
    <div class="game-spec-rule-effect-if-then  display-row">
      <span class="keep-whitespace">if </span>
      <game-spec-condition
        :condition="effect.condition"
        :specialOptions="specialOptions"
        @change="(newCondition) => conditionChange(newCondition)"
      />
      <span class="keep-whitespace"> then </span>
      <game-spec-rule-effect
        :effect="effect.effect"
        :specialOptions="specialOptions"
        @change="(newEffect) => effectChange(newEffect)"
      />
    </div>
</template>

<script>
import EffectIfThen from '@/js-classes/EffectIfThen'
import GameSpecCondition from './GameSpecCondition.vue'
import GameSpecRuleEffect from './GameSpecRuleEffect.vue'

export default {
  name: 'GameSpecRuleEffectIfThen',
  props: {
    effect: {
      type: EffectIfThen,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    GameSpecCondition
  },
  beforeCreate: function () {
    this.$options.components.GameSpecRuleEffect = GameSpecRuleEffect
    // We need to import this later because else we run into a circular
    // dependency problem: the Effect Vue declares this one as a component
    // and this one declares the Effect Vue as a component
  },
  computed: {
    console: () => console,
    text: () => 'if ... then ...',
    effectClass: () => EffectIfThen
  },
  methods: {
    conditionChange (newCondition) {
      this.effect.condition = newCondition
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    },
    effectChange (newEffect) {
      this.effect.effect = newEffect // this.effect.effect looks a little weird and maybe should be changed?
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
