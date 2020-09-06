import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValuePlayerCurrent extends SelectorValue {
  getValueType () {
    return AttributeTypes.PLAYER
  }

  getValue (_gameState, _triggerArgs) {
    return (gameState) => gameState.gameAttributes['Current Player']
  }
}
