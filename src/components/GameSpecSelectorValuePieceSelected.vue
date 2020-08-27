<template>
    <div class="game-spec-selector-value-piece-selected">
      <span class="keep-whitespace">{{text}}</span>
    </div>
</template>

<script>
import SelectorValueSelectedPiece from '@/js-classes/SelectorValueSelectedPiece'

export default {
  name: 'GameSpecSelectorValuePieceSelected',
  computed: {
    console: () => console,
    text () { return 'the piece that was selected' },
    selectorClass () { return SelectorValueSelectedPiece }
  }
}
</script>

<style scoped>

</style>
