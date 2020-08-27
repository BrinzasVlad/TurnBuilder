<template>
    <div class="game-spec-selector-value-text-input" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <input type="text" v-model.lazy="textValue" />
    </div>
</template>

<script>
import SelectorValueExactText from '@/js-classes/SelectorValueExactText'

export default {
  name: 'GameSpecSelectorValueTextInput',
  props: {
    selector: {
      type: SelectorValueExactText,
      required: true
    }
  },
  computed: {
    console: () => console,
    text () { return '(type a value)' },
    selectorClass () { return SelectorValueExactText },
    textValue: {
      get () {
        return this.selector.value
      },
      set (newValue) {
        this.selector.value = newValue
        this.$emit('change', this.selector)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
      }
    }
  }
}
</script>

<style scoped>

</style>
