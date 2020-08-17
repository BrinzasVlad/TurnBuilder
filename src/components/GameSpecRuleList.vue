<template>
    <div class="game-spec-rule-list">
      <h2>Game rules:</h2>
      <ul>
        <li
          is="game-spec-rule-list-item"
          v-for="ruleWithKey in rulesWithKeys"
          :key="ruleWithKey.key"
          :rule="ruleWithKey.rule"
        />
        <li class="add-rule-entry">
          <button @click="addRule">Add new rule...</button>
        </li>
      </ul>
    </div>
</template>

<script>
import GameSpecRuleListItem from './GameSpecRuleListItem.vue'

let keyCounter = 1

export default {
  name: 'GameSpecRuleList',
  components: {
    GameSpecRuleListItem
  },
  computed: {
    console: () => console,
    rulesWithKeys () {
      return this.$store.state.gameSpec.rules.map((rule) => {
        return { key: keyCounter++, rule: rule }
      })
    }
  },
  methods: {
    addRule () {
      this.$store.commit('addRule')
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: left;
}
.add-rule-entry {
  text-align: left;
}
</style>
