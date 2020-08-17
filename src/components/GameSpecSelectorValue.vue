<template>
    <div class="game-spec-selector-value" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-value-type"
        :clearable="false"
        :options="valueTypeOptions"
        :getOptionLabel="(option) => option.text + ': ...'"
      >
        <template #selected-option="{ text, component }">
          <span class="keep-whitespace">{{ text }}: </span>
          <component :is="component" />
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
    valueTypeOptions () {
      return AttributeTypes.allValues.map((valueType) => {
        let associatedComponentName
        switch (valueType) {
          case AttributeTypes.NUMBER: associatedComponentName = GameSpecSelectorValueNumber.name; break
          case AttributeTypes.WORD: associatedComponentName = 'not yet implemented'; break
          case AttributeTypes.PIECE: associatedComponentName = 'not yet implemented'; break
          case AttributeTypes.TILE: associatedComponentName = 'not yet implemented'; break
          case AttributeTypes.PLAYER: associatedComponentName = 'not yet implemented'; break
          default: throw new Error('Value type ' + valueType + ' does not have an associated selector component')
        }

        return { component: associatedComponentName, text: valueType }
      })
    }
  }
}
</script>

<style scoped>

</style>
