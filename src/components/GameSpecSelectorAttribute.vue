<template>
    <div class="game-spec-selector-attribute" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-attribute-type"
        :clearable="false"
        :options="attributeTypeOptions"
      >
        <template #selected-option="{ label }">
          <div v-if="label === 'game attribute ...'" style="display: flex; flex-direction: row;">
            <span>game attribute </span>
            <game-spec-selector-attribute-game-attr />
          </div>
          <div v-else>
            <!-- TODO: The other options (such as "from ... attribute ...") -->
          </div>
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import GameSpecSelectorAttributeGameAttr from './GameSpecSelectorAttributeGameAttr.vue'

export default {
  name: 'GameSpecSelectorAttribute',
  components: {
    vSelect,
    GameSpecSelectorAttributeGameAttr
  },
  computed: {
    console: () => console,
    attributeTypeOptions () {
      return ['game attribute ...']
    }
  }
}
</script>

<style scoped>
span {
  white-space: pre-wrap;
}
</style>
