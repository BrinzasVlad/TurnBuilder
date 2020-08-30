<template>
    <div class="game-play-short-display-player">
      <span class="keep-whitespace">Player {{ player.playerNumber }}</span>
    </div>
</template>

<script>
export default {
  name: 'GamePlayShortDisplayPlayer',
  props: {
    player: {
      type: Object,
      required: true
      // TODO: maybe add custom validators?
    }
  },
  computed: {
    console: () => console
  }
}
</script>

<style scoped>
.game-play-short-display-player {
  display: inline;
}
</style>
