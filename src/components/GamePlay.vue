<template>
    <div class="game-play">
      <game-play-grid @piece-viewed="(pieceViewed) => changeViewedPiece(pieceViewed)" />
      <game-play-sidebar :viewedPiece="viewedPiece" />
    </div>
</template>

<script>
import GamePlayGrid from './GamePlayGrid.vue'
import GamePlaySidebar from './GamePlaySidebar.vue'

export default {
  name: 'GamePlay',
  beforeCreate: function () {
    this.$store.commit('gamePlaySet')
    this.$store.dispatch('gameStart')
  },
  destroyed: function () {
    this.$store.commit('gamePlayReset')
  },
  components: {
    GamePlayGrid,
    GamePlaySidebar
  },
  data () {
    return {
      viewedPiece: null
    }
  },
  computed: {
    console: () => console
  },
  methods: {
    changeViewedPiece (newPieceViewed) { this.viewedPiece = newPieceViewed }
  }
}
</script>

<style scoped>
.game-play {
  display: flex;
  flex-direction: row;
}
.game-play-grid {
  width: 75%;
  height: 100%;
}
.game-play-sidebar {
  width: 25%;
  min-width: 15rem;
  height: 100%;
}
</style>
