import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class GameSelectorValuePlayerCurrent extends SelectorValue {
  getType () {
    return AttributeTypes.PLAYER
  }

  getValue (gameState, _triggerArgs) {
    return gameState.gameAttributes['Current Player']
  }
}
