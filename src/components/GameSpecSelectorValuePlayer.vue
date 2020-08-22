<template>
    <div class="game-spec-selector-value-player" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-value-player-type"
        :clearable="false"
        :options="playerSelectorsList"
        :value="currentOption"
        @input="(newOption) => selectionChange(newOption.selectorClass)"
        label="text"
      >
        <template #selected-option="{ component }">
          <component
            :is="component"
            :selector="selector"
            :specialOptions="specialOptions"
            @change="(newChildSelectorValue) => childSelectorChange(newChildSelectorValue)" />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import SelectorValue from '@/utils/SelectorValue'
import GameSpecSelectorValuePlayerPick from './GameSpecSelectorValuePlayerPick.vue'
import GameSpecSelectorValuePlayerCurrent from './GameSpecSelectorValuePlayerCurrent.vue'

export default {
  name: 'GameSpecSelectorValuePlayer',
  props: {
    selector: {
      type: SelectorValue,
      required: false
      // Will start off undefined until the user selects something
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    vSelect,
    GameSpecSelectorValuePlayerPick,
    GameSpecSelectorValuePlayerCurrent
  },
  computed: {
    console: () => console,
    playerSelectorsList () {
      const playerSelectorsToAdd = [
        GameSpecSelectorValuePlayerPick,
        GameSpecSelectorValuePlayerCurrent
      ]
      return playerSelectorsToAdd.map((selector) => {
        return {
          component: selector.name,
          text: selector.computed.text(),
          selectorClass: selector.computed.selectorClass()
        }
      })
    },
    currentOption () {
      if (this.selector) {
        return this.playerSelectorsList.find((option) => {
          const currentSelectorClass = this.selector.constructor
          return option.selectorClass === currentSelectorClass
        })
      } else return null
    }
  },
  methods: {
    childSelectorChange (newSelectorValue) {
      this.$emit('change', newSelectorValue)
    },
    selectionChange (NewSelectorClass) {
      this.$emit('change', new NewSelectorClass())
    }
  }
}
</script>

<style scoped>

</style>
