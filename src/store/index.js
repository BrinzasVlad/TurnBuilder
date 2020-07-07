import Vue from 'vue'
import Vuex from 'vuex'
import AttributeTypes from '../utils/AttributeTypes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* TODO: maybe split all of these into modules and submodules instead? */
    gameSpec: {
      players: {
        number: 2,
        attributes: []
      },
      grid: {
        height: 3,
        width: 3,
        attributes: []
      },
      pieces: []
      /* TODO: data for state / rules */
    }
  },
  mutations: {
    // Players
    setPlayerCount (state, value) {
      state.gameSpec.players.number = value
    },
    addPlayerAttribute (state) {
      addEmptyAttribute(state.gameSpec.players.attributes)
    },
    alterPlayerAttribute (state, { name, newValue }) {
      alterAttribute(state.gameSpec.players.attributes, name, newValue)
    },
    removePlayerAttribute (state, name) {
      removeAttribute(state.gameSpec.players.attributes, name)
    },
    // Grid
    setGridHeight (state, value) {
      state.gameSpec.grid.height = value
    },
    setGridWidth (state, value) {
      state.gameSpec.grid.width = value
    },
    addTileAttribute (state) {
      addEmptyAttribute(state.gameSpec.grid.attributes)
    },
    alterTileAttribute (state, { name, newValue }) {
      alterAttribute(state.gameSpec.grid.attributes, name, newValue)
    },
    removeTileAttribute (state, name) {
      removeAttribute(state.gameSpec.grid.attributes, name)
    },
    // Pieces
    addPiece (state) {
      state.gameSpec.pieces.push({
        name: '',
        icon: 'circle.png',
        attributes: [
          { name: 'Owner', type: AttributeTypes.PLAYER },
          { name: 'Position', type: AttributeTypes.TILE }
        ]
      })
    },
    alterPieceName (state, { name, newName }) {
      const index = state.gameSpec.pieces.findIndex(piece => piece.name === name)
      state.gameSpec.pieces[index].name = newName
    },
    alterPieceIcon (state, { name, newIcon }) {
      const index = state.gameSpec.pieces.findIndex(piece => piece.name === name)
      state.gameSpec.pieces[index].icon = newIcon
    },
    alterPieceAddAttribute (state, pieceName) {
      const pieceIndex = state.gameSpec.pieces.findIndex(piece => piece.name === pieceName)
      const pieceAttributeList = state.gameSpec.pieces[pieceIndex].attributes
      addEmptyAttribute(pieceAttributeList)
    },
    alterPieceAlterAttribute (state, { pieceName, attributeName, newValue }) {
      const pieceIndex = state.gameSpec.pieces.findIndex(piece => piece.name === pieceName)
      const pieceAttributeList = state.gameSpec.pieces[pieceIndex].attributes
      alterAttribute(pieceAttributeList, attributeName, newValue)
    },
    alterPieceRemoveAttribute (state, { pieceName, attributeName }) {
      const pieceIndex = state.gameSpec.pieces.findIndex(piece => piece.name === pieceName)
      const pieceAttributeList = state.gameSpec.pieces[pieceIndex].attributes
      removeAttribute(pieceAttributeList, attributeName)
    }
    /* TODO: synchronous changes to the above */
  },
  actions: {
    /* TODO: do we even need actions, though?? */
  },
  modules: {
  }
})

/* I tried to make a wrapper class around Array in order to add some extra functionality to it.
   However, Vue seems to do some behind-the-scenes wrapping of Array objects or something like that
   because I was entirely unable to access any of the methods I had added and the modified-Array
   instances were replaced with regular (probably modified?) Arrays - I checked with <var>.constructor.name. */
function addEmptyAttribute (attributeList) {
  attributeList.push({ name: '', type: '' })
}

function alterAttribute (attributeList, attributeName, newValue) {
  const attributeIndex = attributeList.findIndex(attribute => attribute.name === attributeName)
  attributeList.splice(attributeIndex, 1, newValue)
}

function removeAttribute (attributeList, attributeName) {
  const attributeIndex = attributeList.findIndex(attribute => attribute.name === attributeName)
  attributeList.splice(attributeIndex, 1)
}
