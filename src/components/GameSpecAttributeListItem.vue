<template>
  <div id="game-spec-attribute-list-item">
    <span>Attribute </span>
    <input
      type="text"
      placeholder="Attribute name"
      class="attribute-name"
      :value="attribute.name"
      @blur="nameChange($event.target.value)"
      @keypress.enter="$event.target.blur"
    >
    <span> of type </span>
    <v-select
      class="attribute-type"
      :clearable="false"
      :options="AttributeTypes.allValues"
      :value="attribute.type"
      @input="typeChange"
    />
    <button
      class="remove-button"
      @click="removeSelf"
    >
      Remove
    </button>
  </div>
</template>

<script>
import AttributeTypes from '@/utils/AttributeTypes.js'
import vSelect from 'vue-select'

export default {
  name: 'GameSpecAttributeListItem',
  components: {
    vSelect
  },
  computed: {
    console: () => console,
    AttributeTypes: () => AttributeTypes
  },
  props: {
    attribute: {
      type: Object,
      required: true
    }
  },
  methods: {
    nameChange (newName) {
      this.$emit('attribute-name-change', newName)
    },
    typeChange (newType) {
      this.$emit('attribute-type-change', newType)
    },
    removeSelf () {
      this.$emit('remove')
    }
  }
}
</script>

<style scoped>
#game-spec-attribute-list-item {
    display: flex;
    flex-direction: row;
}
.remove-button {
  color: red;
}
</style>
