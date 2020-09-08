import SelectorValueExactPiece from '@/js-classes/SelectorValueExactPiece'
import { createTile, createPiece } from '../../utils/GamePlayObjectUtils'
import { createValueSelector } from '../../utils/GameSpecObjectUtils'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorValueExactPiece.js', () => {
  it('should correctly indicate its type even without an assigned value', () => {
    const selector = new SelectorValueExactPiece()
    expect(selector.getValueType()).toBe(AttributeTypes.PIECE)
  })
  it('should provide the correct value when queried', () => {
    const testPiece = createPiece(3, 'Dummy Type')
    const testContainingTile = createTile(1, 2, testPiece)
    const selector = new SelectorValueExactPiece(createValueSelector(testContainingTile))

    const valueFromState = selector.getValue({}, {})
    const actualValue = valueFromState({})

    expect(actualValue).toBe(testPiece)
  })
})
