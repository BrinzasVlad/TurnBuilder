<template>
    <div class="game-spec-piece-list">
      <h2>Pieces</h2>
      <ul>
        <li
          v-for="(piece, index) in pieces"
          :key="piece.name"
        >
          <game-spec-piece-list-item
            :piece="piece"
            @piece-name-change="(newName) => renamePiece(index, newName)"
            @piece-icon-change="(newIcon) => changePieceIcon(index, newIcon)"
            @remove="removePiece(index)"
          />
        </li>
        <li class="add-piece-entry">
          <button @click="addPiece">Add new piece...</button>
        </li>
      </ul>
    </div>
</template>

<script>
import GameSpecPieceListItem from './GameSpecPieceListItem.vue'

export default {
  name: 'GameSpecPieceList',
  components: {
    GameSpecPieceListItem
  },
  computed: {
    console: () => console,
    pieces () { return this.$store.state.gameSpec.pieces }
  },
  methods: {
    addPiece () {
      this.$store.commit('addPiece')
    },
    renamePiece (index, newName) {
      this.$store.commit('alterPieceName', { pieceName: this.pieces[index].name, newName: newName })
    },
    changePieceIcon (index, newIcon) {
      this.$store.commit('alterPieceIcon', { pieceName: this.pieces[index].name, newIcon: newIcon })
    },
    removePiece (index) {
      this.$store.commit('removePiece', this.pieces[index].name)
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: left;
}
.add-piece-entry {
  text-align: left;
}
</style>
