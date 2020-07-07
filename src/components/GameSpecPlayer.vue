<template>
    <div class="game-spec-player">
      <h2>Player specifications</h2>
      <game-spec-player-count class="player-count" />
      <h3>Player attributes:</h3>
      <game-spec-attribute-list
        :attributes="playerAttributes"
        @attribute-name-change="(index, newName) => renamePlayerAttribute(index, newName)"
        @attribute-type-change="(index, newType) => retypePlayerAttribute(index, newType)"
        @attribute-add-new="addPlayerAttribute"
        @attribute-remove="(index) => removePlayerAttribute(index)"
      />
    </div>
</template>

<script>
import GameSpecPlayerCount from './GameSpecPlayerCount.vue'
import GameSpecAttributeList from './GameSpecAttributeList.vue'

export default {
  name: 'GameSpecPlayer',
  components: {
    GameSpecPlayerCount,
    GameSpecAttributeList
  },
  computed: {
    console: () => console,
    playerAttributes () { return this.$store.state.gameSpec.players.attributes }
  },
  methods: {
    renamePlayerAttribute (index, newName) {
      const oldAttribute = this.playerAttributes[index]
      const newAttribute = { ...oldAttribute, name: newName }
      this.$store.commit('alterPlayerAttribute', { name: oldAttribute.name, newValue: newAttribute })
    },
    retypePlayerAttribute (index, newType) {
      const oldAttribute = this.playerAttributes[index]
      const newAttribute = { ...oldAttribute, type: newType }
      this.$store.commit('alterPlayerAttribute', { name: oldAttribute.name, newValue: newAttribute })
    },
    addPlayerAttribute () {
      this.$store.commit('addPlayerAttribute')
    },
    removePlayerAttribute (index) {
      const attribute = this.playerAttributes[index]
      this.$store.commit('removePlayerAttribute', attribute.name)
    }
  }
}
</script>

<style scoped>
h2, h3 {
  text-align: left;
}
.player-count {
  text-align: left;
}
</style>
