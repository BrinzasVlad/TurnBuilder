import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValueSelectedPiece extends SelectorValue {
  getType () {
    return AttributeTypes.PIECE
  }

  getValue (_gameState, triggerArgs) {
    const selectedPiece = triggerArgs
    return (gameState) => gameState.pieces.find((piece) => piece.id === selectedPiece.id)
  }
}
