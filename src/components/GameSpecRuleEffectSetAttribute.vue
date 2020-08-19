<template>
    <div class="game-spec-rule-effect-set-attribute  display-row">
        <span class="keep-whitespace">{{textChunks[0]}}</span>
        <game-spec-selector-attribute
          :selector="effect.attributeSelector"
          @change="(newSelector) => attributeSelectorChange(newSelector)"
        />
        <span class="keep-whitespace" v-if="attributeType">{{textChunks[1]}}</span>
        <game-spec-selector-value
          v-if="attributeType"
          :valueType="attributeType"
          :selector="effect.valueSelector"
          @change="(newSelector) => valueSelectorChange(newSelector)"
        />
    </div>
</template>

<script>
import EffectSetAttribute from '@/utils/EffectSetAttribute'
import GameSpecSelectorAttribute from './GameSpecSelectorAttribute.vue'
import GameSpecSelectorValue from './GameSpecSelectorValue.vue'

export default {
  name: 'GameSpecRuleEffectSetAttribute',
  props: {
    effect: {
      type: EffectSetAttribute,
      required: true
    }
  },
  components: {
    GameSpecSelectorAttribute,
    GameSpecSelectorValue
  },
  computed: {
    console: () => console,
    text: () => 'set the value of ... to ...',
    effectClass () { return EffectSetAttribute },
    textChunks: function () { return this.text.split('...') },
    attributeType () {
      if (this.effect.attributeSelector && this.effect.attributeSelector.getAttribute()) {
        // If an attribute selector has been set and
        // it is connected to an actual attribute
        return this.effect.attributeSelector.getAttribute().type
      } else return null
    }
  },
  methods: {
    attributeSelectorChange (newAttributeSelector) {
      this.effect.attributeSelector = newAttributeSelector // Mutating property of a prop object directly!
      this.$emit('change', this.effect) // Thus we emit it as an event so the parent is notified
      // TODO: is this redundant / pointless?
    },
    valueSelectorChange (newValueSelector) {
      this.effect.valueSelector = newValueSelector
      this.$emit('change', this.effect)
      // TODO: same as above, is mutating the prop then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
