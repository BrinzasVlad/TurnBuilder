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
import SelectorAttributeGameAttr from '@/js-classes/SelectorAttributeGameAttr'

export default {
  name: 'GameSpecSelectorAttributeGameAttr',
  props: {
    selector: {
      type: SelectorAttributeGameAttr,
      required: true
    },
    expectedType: {
      type: String, // TODO: this is actually an AttributeTypes entry
      required: false
    }
  },
  components: {
    vSelect
  },
  computed: {
    console: () => console,
    text () { return 'game attribute ...' },
    selectorClass () { return SelectorAttributeGameAttr },
    gameAttributes () {
      const allGameAttributes = this.$store.state.gameSpec.gameAttributes
      if (this.expectedType) return allGameAttributes.filter((attribute) => attribute.type === this.expectedType)
      else return allGameAttributes
    }
  },
  methods: {
    attributeChanged (newAttribute) {
      this.selector.gameAttribute = newAttribute
      this.$emit('change', this.selector)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
