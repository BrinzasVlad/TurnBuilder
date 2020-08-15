<template>
    <div class="game-spec-game-attr">
      <h3>Game attributes:</h3>
      <game-spec-attribute-list
        :attributes="gameAttributes"
        @attribute-name-change="(index, newName) => renameGameAttribute(index, newName)"
        @attribute-type-change="(index, newType) => retypeGameAttribute(index, newType)"
        @attribute-add-new="addGameAttribute"
        @attribute-remove="(index) => removeGameAttribute(index)"
      />
    </div>
</template>

<script>
import GameSpecAttributeList from './GameSpecAttributeList.vue'

export default {
  name: 'GameSpecGameAttr',
  components: {
    GameSpecAttributeList
  },
  computed: {
    console: () => console,
    gameAttributes () { return this.$store.state.gameSpec.gameAttributes }
  },
  methods: {
    renameGameAttribute (index, newName) {
      const attribute = this.gameAttributes[index]
      this.$store.commit(
        'alterGameAttribute',
        { attibuteName: attribute.name, propertyName: 'name', newValue: newName }
      )
    },
    retypeGameAttribute (index, newType) {
      const attribute = this.gameAttributes[index]
      this.$store.commit(
        'alterGameAttribute',
        { attributeName: attribute.name, propertyName: 'type', newValue: newType }
      )
    },
    addGameAttribute () {
      this.$store.commit('addGameAttribute')
    },
    removeGameAttribute (index) {
      const attribute = this.gameAttributes[index]
      this.$store.commit('removeGameAttribute', attribute.name)
    }
  }
}
</script>

<style scoped>
h2, h3 {
  text-align: left;
}
</style>
