import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValueExactPiece extends SelectorValue {
  constructor (tileSelector) {
    super()
    this._tileSelector = tileSelector
  }

  set tileSelector (newTileSelector) {
    // TODO: check that it actually is a value selector that returns tile
    this._tileSelector = newTileSelector
  }

  get tileSelector () { return this._tileSelector }

  getValueType () { return AttributeTypes.PIECE }

  getValue (gameState, triggerArgs) {
    const tileFromState = this._tileSelector.getValue(gameState, triggerArgs)

    // Note that the tile might be empty! (And thus undefined will be returned)
    return (finalGameState) => tileFromState(finalGameState).Content
  }
}
