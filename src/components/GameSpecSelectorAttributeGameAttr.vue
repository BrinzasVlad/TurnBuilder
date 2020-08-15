<template>
    <div class="game-spec-selector-attribute-game-attr" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        class="selector-attribute-name"
        :clearable="false"
        :options="gameAttributes"
        :getOptionLabel="(attribute) => attribute.name"
      />
    </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'GameSpecSelectorAttributeGameAttr',
  components: {
    vSelect
  },
  computed: {
    console: () => console,
    gameAttributes () { return this.$store.state.gameSpec.gameAttributes }
  }
}
</script>

<style scoped>

</style>
