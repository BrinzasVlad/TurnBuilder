<template>
    <div class="game-play-sidebar">
      <game-play-sidebar-player />
      <game-play-sidebar-game-attr />
      <game-play-sidebar-viewed-piece v-if="viewedPiece" :viewedPiece="viewedPiece" />
    </div>
</template>

<script>
import GamePlaySidebarPlayer from './GamePlaySidebarPlayer.vue'
import GamePlaySidebarGameAttr from './GamePlaySidebarGameAttr.vue'
import GamePlaySidebarViewedPiece from './GamePlaySidebarViewedPiece.vue'

export default {
  name: 'GamePlaySidebar',
  props: {
    viewedPiece: {
      type: Object,
      required: false
    }
  },
  components: {
    GamePlaySidebarPlayer,
    GamePlaySidebarGameAttr,
    GamePlaySidebarViewedPiece
  },
  computed: {
    console: () => console
  }
}
</script>

<style scoped>
.game-play-sidebar {
  display: flex;
  flex-direction: column;
}
.game-play-sidebar-player {
  flex-grow: 25;
}
.game-play-sidebar-game-attr {
  flex-grow: 25;
}
.game-play-sidebar-viewed {
  flex-grow: 50;
  background-color: tomato;
}
</style>
