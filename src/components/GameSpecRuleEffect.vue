<template>
    <div class="game-spec-player-count">
      <v-select
        class="rule-effect"
        :clearable="false"
        :options="effectsList"
        label="text"
      >
        <template #selected-option="{ component }" class="vs__selected">
          <component :is="component" />
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
      required: true
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
        return { component: effect.name, text: effect.computed.text() }
      })
    }
  }
}
</script>

<style scoped>

</style>
