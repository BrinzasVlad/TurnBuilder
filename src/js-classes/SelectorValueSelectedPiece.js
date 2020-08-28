import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValueSelectedPiece extends SelectorValue {
  getType () {
    return AttributeTypes.PIECE
  }

  getValue (_gameState, triggerArgs) {
    // TOOD: maybe we should use the piece id to re-find the piece in the game state?
    // This is because other details might have changed in the meanwhile (including the
    // piece no longer being part of the game state) - will the piece instance in the
    // trigger arguments update at the same time if it is changed in the state?
    const piece = triggerArgs
    return piece
  }
}
