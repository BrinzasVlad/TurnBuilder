import Vue from 'vue'
import Vuex from 'vuex'
import AttributeTypes from '@/utils/AttributeTypes'
import TriggerTypes from '@/utils/TriggerTypes'
import Attribute from '@/js-classes/Attribute'
import Rule from '@/js-classes/Rule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* TODO: maybe split all of these into modules and submodules instead? */
    gameSpec: {
      players: {
        number: 2,
        attributes: [
          new Attribute('Next Player', AttributeTypes.PLAYER, false)
        ]
      },
      grid: {
        height: 3,
        width: 3,
        attributes: [
          new Attribute('Row', AttributeTypes.NUMBER, false),
          new Attribute('Column', AttributeTypes.NUMBER, false),
          new Attribute('Content', AttributeTypes.PIECE, false)
        ]
      },
      pieces: [],
      gameAttributes: [
        new Attribute('Current Player', AttributeTypes.PLAYER, false)
      ],
      rules: []
    },
    gamePlay: {
      players: [],
      grid: {
        tiles: []
      },
      pieces: [],
      gameAttributes: {}
    }
  },
  mutations: {
    /// GAME SPEC MUTATIONS
    // Players
    setPlayerCount (state, value) {
      state.gameSpec.players.number = value
    },
    addPlayerAttribute (state) {
      addEmptyAttribute(state.gameSpec.players.attributes)
    },
    alterPlayerAttribute (state, { attributeName, propertyName, newValue }) {
      alterAttribute(state.gameSpec.players.attributes, attributeName, propertyName, newValue)
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
    alterTileAttribute (state, { attributeName, propertyName, newValue }) {
      alterAttribute(state.gameSpec.grid.attributes, attributeName, propertyName, newValue)
    },
    removeTileAttribute (state, name) {
      removeAttribute(state.gameSpec.grid.attributes, name)
    },
    // Pieces
    addPiece (state) {
      const newPieceNumber = nextNewNumber(state.gameSpec.pieces.map((piece) => piece.name), 'New Piece')
      const newPieceName = 'New Piece ' + newPieceNumber

      state.gameSpec.pieces.push({
        name: newPieceName,
        icon: 'circle.png',
        attributes: [
          new Attribute('Owner', AttributeTypes.PLAYER, false),
          new Attribute('Position', AttributeTypes.TILE, false)
        ]
      })
    },
    alterPieceName (state, { pieceName, newName }) {
      const pieceIndex = state.gameSpec.pieces.findIndex(piece => piece.name === pieceName)
      state.gameSpec.pieces[pieceIndex].name = newName
    },
    alterPieceIcon (state, { pieceName, newIcon }) {
      const pieceIndex = state.gameSpec.pieces.findIndex(piece => piece.name === pieceName)
      state.gameSpec.pieces[pieceIndex].icon = newIcon
    },
    alterPieceAddAttribute (state, pieceName) {
      const pieceIndex = state.gameSpec.pieces.findIndex(piece => piece.name === pieceName)
      const pieceAttributeList = state.gameSpec.pieces[pieceIndex].attributes
      addEmptyAttribute(pieceAttributeList)
    },
    alterPieceAlterAttribute (state, { pieceName, attributeName, propertyName, newValue }) {
      const pieceIndex = state.gameSpec.pieces.findIndex(piece => piece.name === pieceName)
      const pieceAttributeList = state.gameSpec.pieces[pieceIndex].attributes
      alterAttribute(pieceAttributeList, attributeName, propertyName, newValue)
    },
    alterPieceRemoveAttribute (state, { pieceName, attributeName }) {
      const pieceIndex = state.gameSpec.pieces.findIndex(piece => piece.name === pieceName)
      const pieceAttributeList = state.gameSpec.pieces[pieceIndex].attributes
      removeAttribute(pieceAttributeList, attributeName)
    },
    removePiece (state, pieceName) {
      const pieceIndex = state.gameSpec.pieces.findIndex(piece => piece.name === pieceName)
      state.gameSpec.pieces.splice(pieceIndex, 1)
    },
    // Game Attributes
    addGameAttribute (state) {
      addEmptyAttribute(state.gameSpec.gameAttributes)
    },
    alterGameAttribute (state, { attributeName, propertyName, newValue }) {
      alterAttribute(state.gameSpec.gameAttributes, attributeName, propertyName, newValue)
    },
    removeGameAttribute (state, name) {
      removeAttribute(state.gameSpec.gameAttributes, name)
    },
    // Rules
    addRule (state) {
      state.gameSpec.rules.push(new Rule())
    },
    alterRule (state, { index, propertyName, newValue }) {
      // TODO: it might be better to identify rules by some unique id than by their index
      state.gameSpec.rules[index][propertyName] = newValue
    },
    removeRule (state, ruleIndex) {
      // TODO: it might be better to identify rules by some unique id than by their index
      state.gameSpec.rules.splice(ruleIndex, 1)
    },
    /// GAME PLAY MUTATIONS
    // Set / Reset
    gamePlayReset (state) {
      state.gamePlay = {
        players: [],
        grid: {
          tiles: []
        },
        pieces: [],
        gameAttributes: {}
      }
    },
    gamePlaySet (state) {
      // Players
      for (let playerNumber = 0; playerNumber < state.gameSpec.players.number; playerNumber++) {
        const player = {}
        state.gameSpec.players.attributes.forEach((attribute) => {
          // For now, just declare it; in the future, we might put a default value there
          Vue.set(player, attribute.name, undefined)
        })

        Vue.set(player, 'playerNumber', playerNumber + 1)

        state.gamePlay.players.push(player)
      }

      // Tiles
      for (let row = 0; row < state.gameSpec.grid.height; row++) {
        state.gamePlay.grid.tiles.push([])
        for (let col = 0; col < state.gameSpec.grid.width; col++) {
          const tile = {}
          state.gameSpec.grid.attributes.forEach((attribute) => {
            // For now, just declare it; in the future, we might put a default value there
            Vue.set(tile, attribute.name, undefined)
          })

          Vue.set(tile, 'Row', row)
          Vue.set(tile, 'Col', col)
          Vue.set(tile, 'Content', null)

          state.gamePlay.grid.tiles[row].push(tile)
        }
      }

      // Game Attributes
      state.gameSpec.gameAttributes.forEach((attribute) => {
        // For now, just declare it; in the future, we might put a default value there
        Vue.set(state.gamePlay.gameAttributes, attribute.name, undefined)
      })
    },
    // Game Effect Results
    setAttributeValue (state, { attributeName, objectFromState, valueToSet }) {
      const objectToSetAttributeFor = objectFromState(state.gamePlay)
      objectToSetAttributeFor[attributeName] = valueToSet
    },
    createPiece (state, { pieceName, targetTile, owner }) {
      const piece = {}
      const pieceSpecification = state.gameSpec.pieces.find((piece) => piece.name === pieceName)

      Vue.set(piece, 'icon', pieceSpecification.icon)
      Vue.set(piece, 'pieceTypeName', pieceSpecification.name)

      pieceSpecification.attributes.forEach((attribute) => {
        // For now, just declare it; in the future, we might put a default value there
        Vue.set(piece, attribute.name, undefined)
      })

      Vue.set(piece, 'Position', targetTile)
      Vue.set(piece, 'Owner', owner)

      state.gamePlay.pieces.push(piece)

      state.gamePlay.grid.tiles[piece.Position.Row][piece.Position.Col].Content = piece
    }
  },
  actions: {
    // Trigger
    trigger ({ state, dispatch, getters }, { triggerType, triggerArgs }) {
      getters.rulesByTrigger(triggerType).forEach((rule) => {
        rule.effect.execute(state.gamePlay, dispatch, triggerArgs)
      })
    },

    // Event reactions
    gameStart ({ dispatch }) {
      dispatch('trigger', { triggerType: TriggerTypes.GAME_START })
    },
    tileSelected ({ dispatch }, tile) {
      dispatch('trigger', { triggerType: TriggerTypes.TILE_SELECTED, triggerArgs: tile })
    },
    pieceSelected ({ dispatch }, piece) {
      dispatch('trigger', { triggerType: TriggerTypes.PIECE_SELECTED, triggerArgs: piece })
    },

    // Possible actions
    setAttributeValue ({ commit }, { attributeName, objectFromState, valueToSet }) {
      commit('setAttributeValue', { attributeName, objectFromState, valueToSet })
      // One might need to determine what exactly was changed (game
      // attribute, player attribute, piece attribute, etc.) to trigger the
      // right rules once such triggers are added.
    },
    createPiece ({ commit }, { pieceName, targetTile, owner }) {
      commit('createPiece', { pieceName, targetTile, owner })
    }
  },
  getters: {
    /* TODO: maybe make more getters, so the internal structure of the store can vary without breaking dependents */
    rulesByTrigger (state) {
      return function (triggerType) {
        return state.gameSpec.rules.filter((rule) => rule.trigger === triggerType)
      }
    }
  },
  modules: {
  }
})

/* I tried to make a wrapper class around Array in order to add some extra functionality to it.
   However, Vue seems to do some behind-the-scenes wrapping of Array objects or something like that
   because I was entirely unable to access any of the methods I had added and the modified-Array
   instances were replaced with regular (probably modified?) Arrays - I checked with <var>.constructor.name. */
function addEmptyAttribute (attributeList) {
  const newAttributeNumber = nextNewNumber(attributeList.map((attr) => attr.name), 'New Attribute')
  const newAttributeName = 'New Attribute ' + newAttributeNumber

  attributeList.push(new Attribute(newAttributeName))
}

function alterAttribute (attributeList, attributeName, propertyName, newValue) {
  const attribute = attributeList.find(attribute => attribute.name === attributeName)
  attribute[propertyName] = newValue
}

function removeAttribute (attributeList, attributeName) {
  const attributeIndex = attributeList.findIndex(attribute => attribute.name === attributeName)
  attributeList.splice(attributeIndex, 1)
}

/**
 * Finds the next number to be given to a newly-created list element.
 * The number is always one greater than the number associated to the latest unnamed element.
 *
 * For example, in a list of ['Cat', 'New Animal 1', 'Dog', 'New Animal 3'], where the
 * prefix for newly-created animals is 'New Animal', the function returns 4.
 *
 * @param {string[]} list A list of names of existing elements
 * @param {string} newElementPrefix A prefix with which all newly-created elements start
 */
function nextNewNumber (list, newElementPrefix) {
  const unnamedElements = list.filter((name) => {
    // !!x is a shortcut for converting x to Boolean via double-negation
    return !!name.match(newElementPrefix)
  })

  const unnamedElementNumbers =
    unnamedElements
      .map((name) => parseInt(name.substring(newElementPrefix.length)))
      .filter((value) => !isNaN(value))

  if (unnamedElementNumbers.length === 0) return 1
  else return Math.max(...unnamedElementNumbers) + 1
}
