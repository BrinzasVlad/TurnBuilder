<template>
    <div class="game-spec-selector-value" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-value-type"
        :clearable="false"
        :options="AttributeTypes.allValues"
      >
        <template #selected-option="{ label }">
          <span class="keep-whitespace">{{ label }}: </span>
          <component :is="selectorNameForType(label)" />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import AttributeTypes from '@/utils/AttributeTypes.js'
import GameSpecSelectorValueNumber from './GameSpecSelectorValueNumber.vue'

export default {
  name: 'GameSpecSelectorValue',
  components: {
    vSelect,
    GameSpecSelectorValueNumber
  },
  computed: {
    console: () => console,
    AttributeTypes: () => AttributeTypes
  },
  methods: {
    selectorNameForType (valueType) {
      switch (valueType) {
        case AttributeTypes.NUMBER: return GameSpecSelectorValueNumber.name
        default: throw new Error('Value type ' + valueType + ' does not have an associated selector component')
      }
    }
  }
}
</script>

<style scoped>

</style>
