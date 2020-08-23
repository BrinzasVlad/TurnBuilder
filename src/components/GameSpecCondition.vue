<template>
    <div class="game-spec-condition" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        :clearable="false"
        :options="conditionsList"
        :value="currentOption"
        @input="(newOption) => selectionChange(newOption.conditionClass)"
        label="text"
      >
        <template #selected-option="{ component }">
          <component
            :is="component"
            :condition="condition"
            :specialOptions="specialOptions"
            @change="(newChildConditionValue) => childConditionChange(newChildConditionValue)" />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import Condition from '@/js-classes/Condition'
import GameSpecConditionTileEmpty from './GameSpecConditionTileEmpty'

export default {
  name: 'GameSpecCondition',
  props: {
    condition: {
      type: Condition,
      required: false
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    vSelect,
    GameSpecConditionTileEmpty
  },
  computed: {
    console: () => console,
    conditionsList () {
      const conditionsToAdd = [
        GameSpecConditionTileEmpty
      ]
      return conditionsToAdd.map((condition) => {
        return {
          component: condition.name,
          text: condition.computed.text(),
          conditionClass: condition.computed.conditionClass()
        }
      })
    },
    currentOption () {
      if (this.condition) {
        return this.conditionsList.find((option) => {
          const currentConditionClass = this.condition.constructor
          return option.conditionClass === currentConditionClass
        })
      } else return null
    }
  },
  methods: {
    selectionChange (NewConditionClass) {
      this.$emit('change', new NewConditionClass())
    },
    childConditionChange (newConditionValue) {
      this.$emit('change', newConditionValue)
    }
  }
}
</script>

<style scoped>

</style>
