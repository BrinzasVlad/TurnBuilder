<template>
    <div class="game-spec-effect" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="rule-effect"
        :clearable="false"
        :options="effectsList"
        :value="currentOption"
        @input="(newOption) => selectionChange(newOption.effectClass)"
        label="text"
      >
        <template #selected-option="{ component }" class="vs__selected">
          <component
            :is="component"
            :effect="effect"
            :specialOptions="specialOptions"
            @change="(newChildEffectValue) => childEffectChange(newChildEffectValue)"
          />
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import Effect from '@/js-classes/Effect'
import GameSpecEffectSetAttribute from './GameSpecEffectSetAttribute.vue'
import GameSpecEffectChangeAttributeBy from './GameSpecEffectChangeAttributeBy.vue'
import GameSpecEffectCreatePiece from './GameSpecEffectCreatePiece.vue'
import GameSpecEffectIfThen from './GameSpecEffectIfThen.vue'
import GameSpecEffectAndThen from './GameSpecEffectAndThen.vue'

export default {
  name: 'GameSpecEffect',
  props: {
    effect: {
      type: Effect,
      required: false
      // It's possible to have a newly-instantiated object that has no associated effect yet
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    vSelect,
    GameSpecEffectSetAttribute,
    GameSpecEffectChangeAttributeBy,
    GameSpecEffectCreatePiece,
    GameSpecEffectIfThen,
    GameSpecEffectAndThen
  },
  computed: {
    console: () => console,
    effectsList: function () {
      const effectsToAdd = [
        GameSpecEffectSetAttribute,
        GameSpecEffectChangeAttributeBy,
        GameSpecEffectCreatePiece,
        GameSpecEffectIfThen,
        GameSpecEffectAndThen
      ]
      return effectsToAdd.map(effect => {
        return {
          component: effect.name,
          text: effect.computed.text(),
          effectClass: effect.computed.effectClass()
        }
      })
    },
    currentOption () {
      if (this.effect) {
        return this.effectsList.find((option) => {
          const currentEffectClass = this.effect.constructor
          return option.effectClass === currentEffectClass
        })
      } else return null
    }
  },
  methods: {
    childEffectChange (newEffect) {
      this.$emit('change', newEffect)
    },
    selectionChange (NewEffectClass) {
      this.$emit('change', new NewEffectClass())
    }
  }
}
</script>

<style scoped>

</style>
