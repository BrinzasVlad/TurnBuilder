<template>
    <div class="game-play-sidebar-game-attr">
      <h3>Current game state</h3>
      <ul>
        <li
          class="sidebar-game-attr-attribute"
          v-for="{ attributeName, attributeValue, attributeType } in currentGameAttributes"
          :key="attributeName"
        >
          <span class="sidebar-game-attr-attribute-name  keep-whitespace">{{ attributeName }}: </span>
          <game-play-short-display-player
            class="sidebar-game-attr-attribute-value"
            v-if="attributeType === 'player'"
            :player="attributeValue"
          />
          <game-play-short-display-tile
            class="sidebar-game-attr-attribute-value"
            v-else-if="attributeType === 'tile'"
            :tile="attributeValue"
          />
          <game-play-short-display-piece
            class="sidebar-game-attr-attribute-value"
            v-else-if="attributeType === 'piece'"
            :piece="attributeValue"
          />
          <span class="sidebar-game-attr-attribute-value  keep-whitespace" v-else>{{ attributeValue }}</span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'GamePlaySidebarGameAttr',
  computed: {
    console: () => console,
    currentGameAttributes () {
      const attributes = []

      for (const attributeName in this.$store.state.gamePlay.gameAttributes) {
        // FIXME: this looks like potentially troublesome code, since the playerNumber property might be changed anytime
        if (attributeName !== 'Current Player') {
          let attributeValue = this.$store.state.gamePlay.gameAttributes[attributeName]

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
.game-play-sidebar-game-attr {
  margin: 2%;
  border: 2px solid black;
  border-radius: 5px;
}
</style>
