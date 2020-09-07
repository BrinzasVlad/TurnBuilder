<template>
    <div class="game-spec-effect-player-wins-game  display-row">
      <game-spec-selector-value-player
        :selector="effect.playerSelector"
        :specialOptions="specialOptions"
        @change="(newPlayerSelector) => playerSelectorChange(newPlayerSelector)"
      />
      <span class="keep-whitespace"> wins the game</span>
    </div>
</template>

<script>
import EffectPlayerWinsGame from '@/js-classes/EffectPlayerWinsGame'
import GameSpecSelectorValuePlayer from './GameSpecSelectorValuePlayer.vue'

export default {
  name: 'GameSpecEffectPlayerWinsGame',
  props: {
    effect: {
      type: EffectPlayerWinsGame,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    GameSpecSelectorValuePlayer
  },
  computed: {
    console: () => console,
    text: () => '... wins the game',
    effectClass: () => EffectPlayerWinsGame
  },
  methods: {
    playerSelectorChange (newPlayerSelector) {
      this.effect.playerSelector = newPlayerSelector
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
