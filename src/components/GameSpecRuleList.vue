<template>
    <div class="game-spec-rule-list">
      <h2>Game rules:</h2>
      <ol>
        <li
          v-for="(ruleWithKey, index) in rulesWithKeys"
          :key="ruleWithKey.key"
          class="display-row"
        >
          <game-spec-rule-list-item
            :rule="ruleWithKey.rule"
            @rule-trigger-change="(newTrigger) => ruleTriggerChange(index, newTrigger)"
            @rule-effect-change="(newEffect) => ruleEffectChange(index, newEffect)"
          />
          <button class="remove-button" @click="removeRule(index)">Remove</button>
        </li>
        <li class="add-rule-entry">
          <button @click="addRule">Add new rule...</button>
        </li>
      </ol>
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
      // FIXME: this is not really working; a different solution should be found!
      // Currently, this will update the count whenever the list of rules changes.
      // While this does fix the problem of providing unique keys for all the
      // elements in the v-for, it does so at the cost of essentially re-rendering
      // the v-for every time
      return this.$store.state.gameSpec.rules.map((rule) => {
        return { key: keyCounter++, rule: rule }
      })
    }
  },
  methods: {
    addRule () {
      this.$store.commit('addRule')
    },
    ruleTriggerChange (index, newTrigger) {
      this.$store.commit('alterRule', { index, propertyName: 'trigger', newValue: newTrigger })
    },
    ruleEffectChange (index, newEffect) {
      this.$store.commit('alterRule', { index, propertyName: 'effect', newValue: newEffect })
    },
    removeRule (index) {
      this.$store.commit('removeRule', index)
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
.remove-button {
  color: red;
}
</style>
