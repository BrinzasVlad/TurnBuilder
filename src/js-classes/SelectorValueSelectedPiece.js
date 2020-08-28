import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValueSelectedPiece extends SelectorValue {
  getType () {
    return AttributeTypes.PIECE
  }

  getValue (_gameState, triggerArgs) {
    const piece = triggerArgs
    return piece
  }
}
