<template>
    <div class="game-spec-rule-effect">
      <v-select
        class="rule-effect"
        :clearable="false"
        :options="effectsList"
        :value="currentOption"
        @input="(newOption) => selectionChange(newOption.effectClass)"
        label="text"
      >
        <template #selected-option="{ component }" class="vs__selected">
          <component
            :is="component"
            :effect="effect"
            @change="(newChildEffectValue) => childEffectChange(newChildEffectValue)"
          />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import GameSpecRuleEffectSetAttribute from './GameSpecRuleEffectSetAttribute.vue'

export default {
  name: 'GameSpecRuleEffect',
  props: {
    effect: {
      type: Object,
      required: false
      // It's possible to have a newly-instantiated object that has no associated effect yet
    }
  },
  components: {
    vSelect,
    GameSpecRuleEffectSetAttribute
  },
  computed: {
    console: () => console,
    effectsList: function () {
      const effectsToAdd = [
        GameSpecRuleEffectSetAttribute
      ]
      return effectsToAdd.map(effect => {
        return {
          component: effect.name,
          text: effect.computed.text(),
          effectClass: effect.computed.effectClass()
        }
      })
    },
    currentOption () {
      if (this.effect) {
        return this.effectsList.find((option) => {
          const currentEffectClass = this.effect.constructor
          return option.effectClass === currentEffectClass
        })
      } else return null
    }
  },
  methods: {
    childEffectChange (newEffect) {
      this.$emit('change', newEffect)
    },
    selectionChange (NewEffectClass) {
      this.$emit('change', new NewEffectClass())
    }
  }
}
</script>

<style scoped>

</style>
