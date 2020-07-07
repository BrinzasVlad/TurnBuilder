<template>
    <div class="game-spec-attribute-list">
      <ul>
        <li
          v-for="(item, index) in attributes"
          :key="item.name"
        >
          <game-spec-attribute-list-item
            :attribute="item"
            @attribute-name-change="(newName) => nameChange(index, newName)"
            @attribute-type-change="(newType) => typeChange(index, newType)"
            @remove="remove(index)"
          />
        </li>
        <li class="add-attribute-entry">
          <button @click="addAttribute">Add new attribute...</button>
        </li>
      </ul>
    </div>
</template>

<script>
import GameSpecAttributeListItem from './GameSpecAttributeListItem.vue'

export default {
  name: 'GameSpecAttributeList',
  components: {
    GameSpecAttributeListItem
  },
  computed: {
    console: () => console
  },
  props: {
    attributes: {
      type: Array,
      required: true
    }
  },
  methods: {
    nameChange (index, newName) {
      this.$emit('attribute-name-change', index, newName)
    },
    typeChange (index, newType) {
      this.$emit('attribute-type-change', index, newType)
    },
    addAttribute () {
      this.$emit('attribute-add-new')
    },
    remove (index) {
      this.$emit('attribute-remove', index)
    }
  }
}
</script>

<style scoped>
.add-attribute-entry {
  text-align: left;
}
</style>
