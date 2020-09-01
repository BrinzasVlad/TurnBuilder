<template>
    <div class="game-spec-effect-and-then  display-row">
      <game-spec-effect
        :effect="effect.firstEffect"
        :specialOptions="specialOptions"
        @change="(newEffect) => firstEffectChange(newEffect)"
      />
      <span class="keep-whitespace"> and then </span>
      <game-spec-effect
        :effect="effect.andThenEffect"
        :specialOptions="specialOptions"
        @change="(newEffect) => andThenEffectChange(newEffect)"
      />
    </div>
</template>

<script>
import EffectAndThen from '@/js-classes/EffectAndThen'
import GameSpecEffect from './GameSpecEffect.vue'

export default {
  name: 'GameSpecEffectAndThen',
  props: {
    effect: {
      type: EffectAndThen,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  beforeCreate: function () {
    this.$options.components.GameSpecEffect = GameSpecEffect
    // We need to import this later because else we run into a circular
    // dependency problem: the Effect Vue declares this one as a component
    // and this one declares the Effect Vue as a component
  },
  computed: {
    console: () => console,
    text: () => '... and then ...',
    effectClass: () => EffectAndThen
  },
  methods: {
    firstEffectChange (newEffect) {
      this.effect.firstEffect = newEffect
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    },
    andThenEffectChange (newEffect) {
      this.effect.andThenEffect = newEffect
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
