<template>
  <div class="game-spec-grid-dimensions">
    <span>Grid dimensions:</span>
    <br>
    <label for="gridWidth">Width:</label>
    <input id="gridWidth" type="number" v-model.number="gridWidth" />
    <label for="gridHeight">Height:</label>
    <input id="gridHeight" type="number" v-model.number="gridHeight" />
  </div>
</template>

<script>
export default {
  name: 'GameSpecGridDimensions',
  computed: {
    console: () => console,
    gridWidth: {
      get () {
        return this.$store.state.gameSpec.grid.width
      },
      set (value) {
        this.$store.commit('setGridWidth', value)
      }
    },
    gridHeight: {
      get () {
        return this.$store.state.gameSpec.grid.height
      },
      set (value) {
        this.$store.commit('setGridHeight', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
