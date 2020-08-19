<template>
    <div class="game-spec-selector-value-number-input" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <input type="number" v-model.number="numberValue" />
    </div>
</template>

<script>
import SelectorValueExact from '@/utils/SelectorValueExact'

export default {
  name: 'GameSpecSelectorValueNumberInput',
  props: {
    selector: {
      type: SelectorValueExact,
      required: true
    }
  },
  computed: {
    console: () => console,
    text () { return '(type a value)' },
    selectorClass () { return SelectorValueExact },
    numberValue: {
      get () {
        return this.selector.value
      },
      set (newValue) {
        this.selector.value = newValue // Mutating property of a prop object directly!
        this.$emit('change', this.selector) // Thus we emit it as an event so the parent is notified
        // TODO: is this redundant / pointless?
      }
    }
  }
}
</script>

<style scoped>

</style>
