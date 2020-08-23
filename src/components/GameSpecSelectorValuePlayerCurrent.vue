<template>
    <div class="game-spec-selector-value-player-current">
      <span class="keep-whitespace">{{text}}</span>
    </div>
</template>

<script>
import SelectorValuePlayerCurrent from '@/js-classes/SelectorValuePlayerCurrent'

export default {
  name: 'GameSpecSelectorValuePlayerCurrent',
  computed: {
    console: () => console,
    text () { return 'the current player' },
    selectorClass () { return SelectorValuePlayerCurrent }
  }
}
</script>

<style scoped>

</style>
