<template>
    <div class="game-spec-effect-set-attribute  display-row">
        <span class="keep-whitespace">set the value of </span>
        <game-spec-selector-attribute
          :selector="effect.attributeSelector"
          :specialOptions="specialOptions"
          @change="(newSelector) => attributeSelectorChange(newSelector)"
        />
        <span class="keep-whitespace" v-if="attributeType"> to </span>
        <game-spec-selector-value
          v-if="attributeType"
          :valueType="attributeType"
          :selector="effect.valueSelector"
          :specialOptions="specialOptions"
          @change="(newSelector) => valueSelectorChange(newSelector)"
        />
    </div>
</template>

<script>
import EffectSetAttribute from '@/js-classes/EffectSetAttribute'
import GameSpecSelectorAttribute from './GameSpecSelectorAttribute.vue'
import GameSpecSelectorValue from './GameSpecSelectorValue.vue'

export default {
  name: 'GameSpecEffectSetAttribute',
  props: {
    effect: {
      type: EffectSetAttribute,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
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
    attributeType () {
      if (this.effect.attributeSelector && this.effect.attributeSelector.getAttributeType()) {
        // If an attribute selector has been set and
        // it is connected to an actual attribute
        return this.effect.attributeSelector.getAttributeType()
      } else return null
    }
  },
  methods: {
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
