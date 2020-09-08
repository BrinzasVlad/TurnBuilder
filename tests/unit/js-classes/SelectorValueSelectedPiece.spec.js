import SelectorValueSelectedPiece from '@/js-classes/SelectorValueSelectedPiece'
import { createPiece } from '../../utils/GamePlayObjectUtils'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorValueSelectedPiece.js', () => {
  it('should correctly indicate its type', () => {
    const selector = new SelectorValueSelectedPiece()
    expect(selector.getValueType()).toBe(AttributeTypes.PIECE)
  })
  it('should return the correct value when queried', () => {
    const testTargetPiece = createPiece(3, 'Dragon', 'dragon.png')
    const testState = {
      pieces: [createPiece(1), createPiece(5), testTargetPiece, createPiece(7), createPiece(41)]
    }
    // TODO: should triggerArgs be an object with properties instead, maybe?
    const testTriggerArguments = testTargetPiece

    const selector = new SelectorValueSelectedPiece()

    const valueFromState = selector.getValue(testState, testTriggerArguments)
    const actualValue = valueFromState(testState)

    expect(actualValue).toBe(testTargetPiece)
  })
})
