import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class GameSelectorValueSelectedTile extends SelectorValue {
  getType () {
    return AttributeTypes.TILE
  }

  getValue (_gameState, triggerArgs) {
    const tile = triggerArgs
    return tile
  }
}
