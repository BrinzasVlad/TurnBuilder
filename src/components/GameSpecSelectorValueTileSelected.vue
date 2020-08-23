<template>
    <div class="game-spec-selector-value-tile-selected">
      <span class="keep-whitespace">{{text}}</span>
    </div>
</template>

<script>
import SelectorValueSelectedTile from '@/js-classes/SelectorValueSelectedTile'

export default {
  name: 'GameSpecSelectorValueTileSelected',
  computed: {
    console: () => console,
    text () { return 'the tile that was selected' },
    selectorClass () { return SelectorValueSelectedTile }
  }
}
</script>

<style scoped>

</style>
