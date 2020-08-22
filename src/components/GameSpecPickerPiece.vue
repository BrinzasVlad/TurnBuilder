<template>
    <div class="game-spec-picker-piece" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="piece-picker"
        :clearable="false"
        :options="pieces"
        :value="piece"
        :getOptionLabel="(option) => option.name"
        @input="(newPiece) => pieceChanged(newPiece)"
      >
        <template #option="{ icon, name }">
            <div class="display-row">
              <img :src="require('../assets/' + icon)">
              <span class="keep-whitespace-nowrap"> {{name}}</span>
            </div>
        </template>
        <template #selected-option="{ icon, name }">
            <div class="display-row">
              <img :src="require('../assets/' + icon)">
              <span class="keep-whitespace-nowrap"> {{name}}</span>
            </div>
        </template>
      </v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'GameSpecPickerPiece',
  props: {
    piece: {
      type: Object,
      required: false
    }
  },
  components: {
    vSelect
  },
  computed: {
    console: () => console,
    pieces () { return this.$store.state.gameSpec.pieces }
  },
  methods: {
    pieceChanged (newPiece) {
      this.$emit('change', newPiece)
    }
  }
}
</script>

<style scoped>
.keep-whitespace-nowrap {
  white-space: pre;
}
</style>
