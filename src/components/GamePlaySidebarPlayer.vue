<template>
    <div class="game-play-sidebar-player">
      <h3 class="sidebar-player-name">{{ currentPlayerName }}</h3>
      <ul>
        <li
          class="sidebar-player-attribute"
          v-for="{ attributeName, attributeValue, attributeType } in currentPlayerAttributes"
          :key="attributeName"
        >
          <span class="sidebar-player-attribute-name  keep-whitespace">{{ attributeName }}: </span>
          <game-play-short-display-player
            class="sidebar-player-attribute-value"
            v-if="attributeType === 'player'"
            :player="attributeValue"
          />
          <game-play-short-display-tile
            class="sidebar-player-attribute-value"
            v-else-if="attributeType === 'tile'"
            :tile="attributeValue"
          />
          <game-play-short-display-piece
            class="sidebar-player-attribute-value"
            v-else-if="attributeType === 'piece'"
            :piece="attributeValue"
          />
          <span class="sidebar-player-attribute-value  keep-whitespace" v-else>{{ attributeValue }}</span>
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

          // Attribute Type
          let attributeType = typeof attributeValue
          if (attributeType === 'object') {
            // TODO: maybe we should have a better way of determining type than looking for properties?
            if ('playerNumber' in attributeValue) attributeType = 'player'
            else if ('Row' in attributeValue && 'Column' in attributeValue) attributeType = 'tile'
            else if ('pieceTypeName' in attributeValue && 'icon' in attributeValue) attributeType = 'piece'
            else throw new Error('Unknown gameplay attribute ' + attributeValue)
          }

          // Push to list
          attributes.push({ attributeName, attributeValue, attributeType })
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
