<template>
    <div class="game-play-sidebar-viewed-piece">
      <h3 class="sidebar-piece-name">
        <img :src="require('@/assets/icons/' + viewedPiece.icon)" class="sidebar-piece-icon" />
        {{ viewedPiece.pieceTypeName }}
      </h3>
      <ul>
        <li
          class="sidebar-piece-attribute"
          v-for="{ attributeName, attributeValue, attributeType } in viewedPieceAttributes"
          :key="attributeName"
        >
          <span class="sidebar-piece-attribute-name  keep-whitespace">{{ attributeName }}: </span>
          <game-play-short-display-player
            class="sidebar-piece-attribute-value"
            v-if="attributeType === 'player'"
            :player="attributeValue"
          />
          <game-play-short-display-tile
            class="sidebar-piece-attribute-value"
            v-else-if="attributeType === 'tile'"
            :tile="attributeValue"
          />
          <game-play-short-display-piece
            class="sidebar-piece-attribute-value"
            v-else-if="attributeType === 'piece'"
            :piece="attributeValue"
          />
          <span class="sidebar-piece-attribute-value  keep-whitespace" v-else>{{ attributeValue }}</span>
        </li>
      </ul>
    </div>
</template>

<script>
import GamePlayShortDisplayPlayer from './GamePlayShortDisplayPlayer'
import GamePlayShortDisplayTile from './GamePlayShortDisplayTile'
import GamePlayShortDisplayPiece from './GamePlayShortDisplayPiece'

export default {
  name: 'GamePlaySidebarViewedPiece',
  props: {
    viewedPiece: {
      type: Object,
      required: true
      // TODO: maybe use custom validator to ensure it's a piece?
    }
  },
  components: {
    GamePlayShortDisplayPlayer,
    GamePlayShortDisplayTile,
    GamePlayShortDisplayPiece
  },
  computed: {
    console: () => console,
    viewedPieceAttributes () {
      const attributes = []

      for (const attributeName in this.viewedPiece) {
        // FIXME: this looks like potentially troublesome code, since the 'system' property names might change anytime
        if (!['id', 'pieceTypeName', 'icon'].includes(attributeName)) {
          // Attribute Value
          let attributeValue = this.viewedPiece[attributeName]

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
.game-play-sidebar-viewed-piece {
  margin: 2%;
  border: 2px solid black;
  border-radius: 5px;
}
</style>
