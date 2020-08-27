<template>
    <div class="game-spec-piece-list-item">
      <div class="piece-presentation  display-row">
        <v-select
          :clearable="false"
          :options="pieceList"
          :value="currentPiece"
          @input="(newOption) => iconChange(newOption.name)"
          label="name"
        >
          <template :slot="slotName" v-for="slotName in ['option', 'selected-option']" slot-scope="{ img }">
            <img :src="img" :key="slotName">
          </template>
        </v-select>
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
import vSelect from 'vue-select'
import imageArray from '@/assets/icons/index.js'
import GameSpecAttributeList from './GameSpecAttributeList.vue'

export default {
  name: 'GameSpecPieceListItem',
  props: {
    piece: {
      type: Object,
      required: true
    }
  },
  components: {
    vSelect,
    GameSpecAttributeList
  },
  computed: {
    console: () => console,
    pieceList: () => imageArray,
    currentPiece () {
      return imageArray.find((image) => (image.name + '.png') === this.piece.icon)
    }
  },
  methods: {
    nameChange (newName) {
      this.$emit('piece-name-change', newName)
    },
    iconChange (newIconName) {
      this.$emit('piece-icon-change', newIconName + '.png')
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
