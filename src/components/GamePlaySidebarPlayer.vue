<template>
    <div class="game-play-sidebar-player">
      <h3 class="sidebar-player-name">{{ currentPlayerName }}</h3>
      <ul>
        <li
          class="sidebar-player-attribute"
          v-for="{ attributeName, attributeValue } in currentPlayerAttributes"
          :key="attributeName"
        >
          <span class="sidebar-player-attribute-name  keep-whitespace">{{ attributeName }}: </span>
          <span class="sidebar-player-attribute-value  keep-whitespace">{{ attributeValue }}</span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'GamePlaySidebarPlayer',
  computed: {
    console: () => console,
    currentPlayer () { return this.$store.state.gamePlay.gameAttributes['Current Player'] },
    currentPlayerName () {
      if (this.currentPlayer) return 'Player ' + this.currentPlayer.playerNumber
      else return 'Current Player Unknown'
    },
    currentPlayerAttributes () {
      const attributes = []

      for (const attributeName in this.currentPlayer) {
        // FIXME: this looks like potentially troublesome code, since the playerNumber property might be changed anytime
        if (attributeName !== 'playerNumber') {
          let attributeValue = this.currentPlayer[attributeName]

          if (attributeValue === undefined) attributeValue = 'unspecified'
          if (attributeValue === null) attributeValue = 'none'

          if (typeof attributeValue === 'object') {
            // FIXME: actually display something for objects! We should probably defer this to some other component
            attributeValue = 'object'
          }

          attributes.push({ attributeName, attributeValue })
        }
      }

      return attributes
    }
  }
}
</script>

<style scoped>
.game-play-sidebar-player {
  margin: 2%;
  border: 2px solid black;
  border-radius: 5px;
}
</style>
