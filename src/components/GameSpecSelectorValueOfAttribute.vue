<template>
    <div class="game-spec-selector-value-of-attribute  display-row">
      <span class="keep-whitespace">the value of </span>
      <game-spec-selector-attribute
        :selector="selector.attributeSelector"
        :expectedType="expectedType"
        :specialOptions="specialOptions"
        @change="(newAttributeSelector) => attributeSelectorChange(newAttributeSelector)"
      />
    </div>
</template>

<script>
import SelectorValueOfAttribute from '@/js-classes/SelectorValueOfAttribute'
import GameSpecSelectorAttribute from './GameSpecSelectorAttribute.vue'

export default {
  name: 'GameSpecSelectorValueOfAttribute',
  props: {
    selector: {
      type: SelectorValueOfAttribute,
      required: true
    },
    expectedType: {
      type: String, // TODO: this is actually an AttributeTypes entry,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  beforeCreate () {
    this.$options.components.GameSpecSelectorAttribute = GameSpecSelectorAttribute
    // We need to import this later because else we run into a circular
    // dependency problem: some attribute selectors may have value selector
    // components, which may include this very selector
  },
  computed: {
    console: () => console,
    text: () => 'the value of ...',
    selectorClass: () => SelectorValueOfAttribute
  },
  methods: {
    attributeSelectorChange (newAttributeSelector) {
      this.selector.attributeSelector = newAttributeSelector
      this.$emit('change', this.selector)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
