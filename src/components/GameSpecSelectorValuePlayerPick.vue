<template>
    <div class="game-spec-selector-value-player-pick" @mousedown.stop>
    <!-- Mousedown.stop needed to prevent the parent v-select from reacting before us -->
      <v-select
        :clearable="false"
        :options="players"
        :value="currentOption"
        label="text"
        @input="(newOption) => playerChanged(newOption.playerNumber)"
      />
    </div>
</template>

<script>
import vSelect from 'vue-select'
import SelectorValueExactPlayer from '@/js-classes/SelectorValueExactPlayer'

export default {
  name: 'GameSpecSelectorValuePlayerPick',
  props: {
    selector: {
      type: SelectorValueExactPlayer,
      required: true
    }
  },
  components: {
    vSelect
  },
  computed: {
    console: () => console,
    text: () => '(choose a player)',
    selectorClass: () => SelectorValueExactPlayer,
    players () {
      const numberPlayers = this.$store.state.gameSpec.players.number

      const players = []
      for (let playerNumber = 1; playerNumber <= numberPlayers; ++playerNumber) {
        players.push({ playerNumber, text: 'Player ' + playerNumber })
      }

      return players
    },
    currentOption () {
      if (this.selector && typeof this.selector.playerNumber === 'number') {
        return this.players.find((player) => player.playerNumber === this.selector.playerNumber)
      } else return null
    }
  },
  methods: {
    playerChanged (newPlayerNumber) {
      this.selector.playerNumber = newPlayerNumber
      this.$emit('change', this.selector)
      // TODO: is mutating the prop directly then emitting an event about it redundant?
    }
  }
}
</script>

<style scoped>

</style>
