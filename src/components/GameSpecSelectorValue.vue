<template>
    <div class="game-spec-selector-value">
      <component
        :is="component.name"
        :selector="selector"
        @change="(newChildSelectorValue) => childSelectorChange(newChildSelectorValue)"
      />
    </div>
</template>

<script>
import vSelect from 'vue-select'
import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from '@/utils/SelectorValue'
import GameSpecSelectorValueNumber from './GameSpecSelectorValueNumber.vue'

export default {
  name: 'GameSpecSelectorValue',
  props: {
    selector: {
      type: SelectorValue,
      required: false
    },
    valueType: {
      validator: (value) => AttributeTypes.allValues.includes(value),
      required: true
    }
  },
  components: {
    vSelect,
    GameSpecSelectorValueNumber
  },
  computed: {
    console: () => console,
    component () {
      switch (this.valueType) {
        case AttributeTypes.NUMBER: return GameSpecSelectorValueNumber
        default: throw new Error('Value type ' + this.valueType + ' does not have an associated selector component')
      }
    }
  },
  methods: {
    childSelectorChange (newSelectorValue) {
      this.$emit('change', newSelectorValue)
    }
  }
}
</script>

<style scoped>

</style>
