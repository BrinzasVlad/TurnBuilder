<!-- TODO: should display one piece and allow editing it and altering its attributes -->

<template>
    <div class="game-spec-piece-list-item">
      <div class="piece-presentation  display-row">
        <img :src="require('@/assets/' + piece.icon)" />
        <input
          type="text"
          placeholder="Piece name"
          :value="piece.name"
          @blur="nameChange($event.target.value)"
          @keypress.enter="$event.target.blur"
        >
        <button
          class="remove-button"
          @click="removeSelf"
        >
          Remove
        </button>
      </div>
      <game-spec-attribute-list
        :attributes="piece.attributes"
        @attribute-name-change="(index, newName) => renamePieceAttribute(index, newName)"
        @attribute-type-change="(index, newType) => retypePieceAttribute(index, newType)"
        @attribute-add-new="addPieceAttribute"
        @attribute-remove="(index) => removePieceAttribute(index)"
      />
    </div>
</template>

<script>
import GameSpecAttributeList from './GameSpecAttributeList.vue'

export default {
  name: 'GameSpecPieceListItem',
  components: {
    GameSpecAttributeList
  },
  computed: {
    console: () => console
  },
  props: {
    piece: {
      type: Object,
      required: true
    }
  },
  methods: {
    nameChange (newName) {
      this.$emit('piece-name-change', newName)
    },
    renamePieceAttribute (index, newName) {
      const attribute = this.piece.attributes[index]
      this.$store.commit('alterPieceAlterAttribute', {
        pieceName: this.piece.name,
        attributeName: attribute.name,
        propertyName: 'name',
        newValue: newName
      })
    },
    retypePieceAttribute (index, newType) {
      const attribute = this.piece.attributes[index]
      this.$store.commit('alterPieceAlterAttribute', {
        pieceName: this.piece.name,
        attributeName: attribute.name,
        propertyName: 'type',
        newValue: newType
      })
    },
    addPieceAttribute () {
      this.$store.commit('alterPieceAddAttribute', this.piece.name)
    },
    removePieceAttribute (index) {
      const attribute = this.piece.attributes[index]
      this.$store.commit('alterPieceRemoveAttribute', {
        pieceName: this.piece.name,
        attributeName: attribute.name
      })
    },
    removeSelf () {
      this.$emit('remove')
    }
  }
}
</script>

<style scoped>
#game-spec-piece-list-item {
  display: flex;
  flex-direction: column;
}
.remove-button {
  color: red;
}
</style>
