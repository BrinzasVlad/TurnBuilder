import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class GameSelectorValueExactPlayer extends SelectorValue {
  constructor (playerNumber) {
    // Players are currently identified by their number, e.g.
    // Player 1, Player 2, ..., Player N
    super()
    this._playerNumber = playerNumber
  }

  set playerNumber (newPlayerNumber) { this._playerNumber = newPlayerNumber }

  get playerNumber () { return this._playerNumber }

  getValueType () {
    return AttributeTypes.PLAYER
  }

  getValue (gameState, _triggerArgs) {
    const playerIndex = this._playerNumber - 1
    return gameState.players[playerIndex]
  }
}
