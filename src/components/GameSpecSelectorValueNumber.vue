<template>
    <div class="game-spec-selector-value-number" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-value-number-type"
        :clearable="false"
        :options="numberSelectorsList"
        label="text"
      >
        <template #selected-option="{ component }">
          <component :is="component" />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import GameSpecSelectorValueNumberInput from './GameSpecSelectorValueNumberInput.vue'

export default {
  name: 'GameSpecSelectorValueNumber',
  components: {
    vSelect,
    GameSpecSelectorValueNumberInput
  },
  computed: {
    console: () => console,
    numberSelectorsList () {
      const numberSelectorsToAdd = [
        GameSpecSelectorValueNumberInput
      ]
      return numberSelectorsToAdd.map((selector) => {
        return { component: selector.name, text: selector.computed.text() }
      })
    }
  }
}
</script>

<style scoped>

</style>
