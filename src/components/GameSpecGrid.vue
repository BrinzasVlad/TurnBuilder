<template>
    <div class="game-spec-grid">
      <h2>Grid specifications</h2>
      <game-spec-grid-dimensions class="grid-dimensions" />
      <h3>Grid attributes:</h3>
      <game-spec-attribute-list
        :attributes="tileAttributes"
        @attribute-name-change="(index, newName) => renameTileAttribute(index, newName)"
        @attribute-type-change="(index, newType) => retypeTileAttribute(index, newType)"
        @attribute-add-new="addTileAttribute"
        @attribute-remove="(index) => removeTileAttribute(index)"
      />
    </div>
</template>

<script>
import GameSpecGridDimensions from './GameSpecGridDimensions.vue'
import GameSpecAttributeList from './GameSpecAttributeList.vue'

export default {
  name: 'GameSpecGrid',
  components: {
    GameSpecGridDimensions,
    GameSpecAttributeList
  },
  computed: {
    console: () => console,
    tileAttributes () { return this.$store.state.gameSpec.grid.attributes }
  },
  methods: {
    renameTileAttribute (index, newName) {
      const attribute = this.tileAttributes[index]
      this.$store.commit(
        'alterTileAttribute',
        { attributeName: attribute.name, propertyName: 'name', newValue: newName }
      )
    },
    retypeTileAttribute (index, newType) {
      const attribute = this.tileAttributes[index]
      this.$store.commit(
        'alterTileAttribute',
        { attributeName: attribute.name, propertyName: 'type', newValue: newType }
      )
    },
    addTileAttribute () {
      this.$store.commit('addTileAttribute')
    },
    removeTileAttribute (index) {
      const attribute = this.tileAttributes[index]
      this.$store.commit('removeTileAttribute', attribute.name)
    }
  }
}
</script>

<style scoped>
h2, h3 {
  text-align: left;
}
.grid-dimensions {
  text-align: left;
}
</style>
