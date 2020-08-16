<template>
    <div class="game-spec-rule-effect-set-attribute  display-row">
        <span class="keep-whitespace">{{textChunks[0]}}</span>
        <game-spec-selector-attribute />
        <span class="keep-whitespace">{{textChunks[1]}}</span>
        <!-- TODO: value selector -->
    </div>
</template>

<script>
import GameSpecSelectorAttribute from './GameSpecSelectorAttribute.vue'

export default {
  name: 'GameSpecRuleEffectSetAttribute',
  components: {
    GameSpecSelectorAttribute
  },
  computed: {
    console: () => console,
    text: () => 'set the value of ... to ...',
    textChunks: function () { return this.text.split('...') }
  }
}
</script>

<style scoped>

</style>
