import Condition from './Condition'

export default class GameConditionTileEmpt extends Condition {
  constructor (tileSelector) {
    super()
    this._tileSelector = tileSelector
  }

  set tileSelector (newTileSelector) {
    // TODO: maybe check that it is indeed a tile selector
    this._tileSelector = newTileSelector
  }

  get tileSelector () { return this._tileSelector }

  isTrue (gameState, triggerArgs) {
    const tileToAssess = this._tileSelector.getValue(gameState, triggerArgs)

    if (tileToAssess.Content === undefined || tileToAssess.Content === null) {
      return true // A tile with no content is empty
    } else return false
  }
}
