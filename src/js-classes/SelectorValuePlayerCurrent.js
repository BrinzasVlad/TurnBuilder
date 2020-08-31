import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValuePlayerCurrent extends SelectorValue {
  getType () {
    return AttributeTypes.PLAYER
  }

  getValue (_gameState, _triggerArgs) {
    return (gameState) => gameState.gameAttributes['Current Player']
  }
}
