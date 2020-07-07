<!-- This is a view meant for "viewing" the latest components and seeing what they look like in action -->

<template>
  <div class="test-view">
    <h1>Hello! This is a test view, your component goes below:</h1>
    <GameSpec />
  </div>
</template>

<script>
import GameSpec from '@/components/GameSpec.vue'

export default {
  name: 'TestView',
  components: {
    GameSpec
  }
}
</script>
