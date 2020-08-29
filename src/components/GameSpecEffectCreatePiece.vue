<template>
    <div class="game-spec-effect-create-piece  display-row">
      <span class="keep-whitespace">create a piece of type </span>
      <game-spec-picker-piece
        :piece="effect.piece"
        @change="(newPiece) => pieceChange(newPiece)"
      />
      <span class="keep-whitespace"> at </span>
      <game-spec-selector-value-tile
        :selector="effect.tileSelector"
        :specialOptions="specialOptions"
        @change="(newSelector) => tileSelectorChange(newSelector)"
      />
      <span class="keep-whitespace"> with the owner </span>
      <game-spec-selector-value-player
        :selector="effect.ownerSelector"
        :specialOptions="specialOptions"
        @change="(newSelector) => ownerSelectorChange(newSelector)"
      />
    </div>
</template>

<script>
import EffectCreatePiece from '@/js-classes/EffectCreatePiece'
import GameSpecPickerPiece from './GameSpecPickerPiece.vue'
import GameSpecSelectorValueTile from './GameSpecSelectorValueTile.vue'
import GameSpecSelectorValuePlayer from './GameSpecSelectorValuePlayer.vue'

export default {
  name: 'GameSpecEffectCreatePiece',
  props: {
    effect: {
      type: EffectCreatePiece,
      required: true
    },
    specialOptions: {
      type: Array,
      required: false
    }
  },
  components: {
    GameSpecPickerPiece,
    GameSpecSelectorValueTile,
    GameSpecSelectorValuePlayer
  },
  computed: {
    console: () => console,
    text: () => 'create a piece ...',
    effectClass () { return EffectCreatePiece }
  },
  methods: {
    pieceChange (newPiece) {
      this.effect.piece = newPiece
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    },
    tileSelectorChange (newSelector) {
      this.effect.tileSelector = newSelector
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    },
    ownerSelectorChange (newSelector) {
      this.effect.ownerSelector = newSelector
      this.$emit('change', this.effect)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
