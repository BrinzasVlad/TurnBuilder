import SelectorValueExactTile from '@/js-classes/SelectorValueExactTile'
import { createTile } from '../../utils/GamePlayObjectUtils'
import { createValueSelector } from '../../utils/GameSpecObjectUtils'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorValueExactTile.js', () => {
  it('should correctly indicate its type even without an assigned value', () => {
    const selector = new SelectorValueExactTile()
    expect(selector.getValueType()).toBe(AttributeTypes.TILE)
  })
  it('should provide the correct value when queried', () => {
    const testRow = 0, testColumn = 1
    const testTargetTile = createTile(testRow, testColumn)
    const testState = { grid: {
      tiles: [
        [createTile(0, 0), testTargetTile],
        [createTile(1, 0), createTile(1, 1)]
      ]
    } }

    const selector = new SelectorValueExactTile(
      createValueSelector(testRow),
      createValueSelector(testColumn)
    )

    const valueFromState = selector.getValue(testState, {})
    const actualValue = valueFromState(testState)

    expect(actualValue).toBe(testTargetTile)
  })
})