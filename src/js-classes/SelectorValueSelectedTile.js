import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValueSelectedTile extends SelectorValue {
  getValueType () {
    return AttributeTypes.TILE
  }

  getValue (_gameState, triggerArgs) {
    const selectedTile = triggerArgs
    return (gameState) => gameState.grid.tiles[selectedTile.Row][selectedTile.Column]
  }
}
