import SelectorValue from './SelectorValue'
import AttributeTypes from './AttributeTypes'

export default class GameSelectorValueSelectedTile extends SelectorValue {
  getType () {
    return AttributeTypes.TILE
  }

  getValue (_gameState, triggerArgs) {
    const tile = triggerArgs
    return tile
  }
}
