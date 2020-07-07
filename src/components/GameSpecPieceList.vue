<!-- TODO: should contain components for displaying / adding / modifying the available pieces -->

<template>
    <div class="game-spec-piece-list">
      <h2>Pieces</h2>
      <ul>
        <li
          is="game-spec-piece-list-item"
          v-for="(piece, index) in pieces"
          :key="piece.name"
          :piece="piece"
          @piece-name-change="(newName) => renamePiece(index, newName)"
        />
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
      this.$store.commit('alterPieceName', { name: this.pieces[index].name, newName: newName })
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
