import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValueExactTile extends SelectorValue {
  constructor (rowSelector, columnSelector) {
    super()
    this._rowSelector = rowSelector
    this._columnSelector = columnSelector
  }

  set rowSelector (newRowSelector) {
    // TODO: check that it is a value selector that returns a number
    this._rowSelector = newRowSelector
  }

  get rowSelector () { return this._rowSelector }

  set columnSelector (newColumnSelector) {
    // TODO: check that it is a value selector that returns a number
    this._columnSelector = newColumnSelector
  }

  get columnSelector () { return this._columnSelector }

  getValueType () { return AttributeTypes.TILE }

  getValue (gameState, triggerArgs) {
    const rowFromState = this._rowSelector.getValue(gameState, triggerArgs)
    const columnFromState = this._columnSelector.getValue(gameState, triggerArgs)

    return (finalGameState) => {
      const row = rowFromState(finalGameState)
      const column = columnFromState(finalGameState)

      return finalGameState.grid.tiles[row][column]
    }
  }
}
