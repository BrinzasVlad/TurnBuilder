<template>
    <div class="game-spec-selector-value-number-input" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <input type="number" v-model.number="numberValue" />
    </div>
</template>

<script>
import SelectorValueExactNumber from '@/js-classes/SelectorValueExactNumber'

export default {
  name: 'GameSpecSelectorValueNumberInput',
  props: {
    selector: {
      type: SelectorValueExactNumber,
      required: true
    }
  },
  computed: {
    console: () => console,
    text () { return '(type a value)' },
    selectorClass () { return SelectorValueExactNumber },
    numberValue: {
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
