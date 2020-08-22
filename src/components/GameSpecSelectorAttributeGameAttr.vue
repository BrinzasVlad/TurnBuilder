<template>
    <div class="game-spec-selector-attribute-game-attr  display-row" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <span class="keep-whitespace">{{ text.split('...')[0] }}</span>
      <v-select
        class="selector-attribute-name"
        :clearable="false"
        :options="gameAttributes"
        :value="selector.gameAttribute"
        :getOptionLabel="(attribute) => attribute.name"
        @input="(newAttribute) => attributeChanged(newAttribute)"
      />
    </div>
</template>

<script>
import vSelect from 'vue-select'
import SelectorAttributeGameAttr from '@/utils/SelectorAttributeGameAttr'

export default {
  name: 'GameSpecSelectorAttributeGameAttr',
  props: {
    selector: {
      type: SelectorAttributeGameAttr,
      required: true
    }
  },
  components: {
    vSelect
  },
  computed: {
    console: () => console,
    text () { return 'game attribute ...' },
    selectorClass () { return SelectorAttributeGameAttr },
    gameAttributes () { return this.$store.state.gameSpec.gameAttributes }
  },
  methods: {
    attributeChanged (newAttribute) {
      this.selector.gameAttribute = newAttribute // Mutating property of a prop object directly!
      this.$emit('change', this.selector) // Thus we emit it as an event so the parent is notified
      // TODO: is this redundant / pointless?
    }
  }
}
</script>

<style scoped>

</style>
