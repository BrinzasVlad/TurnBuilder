import SelectorValue from './SelectorValue'
import AttributeTypes from './AttributeTypes'

export default class GameSelectorValuePlayerCurrent extends SelectorValue {
  getType () {
    return AttributeTypes.PLAYER
  }

  getValue (gameState, _triggerArgs) {
    return gameState.gameAttributes['Current Player']
  }
}
