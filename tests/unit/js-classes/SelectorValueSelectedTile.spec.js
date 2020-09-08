import SelectorValueSelectedTile from '@/js-classes/SelectorValueSelectedTile'
import { createTile } from '../../utils/GamePlayObjectUtils'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorValueSelectedTile.js', () => {
  it('should correctly indicate its type', () => {
    const selector = new SelectorValueSelectedTile()
    expect(selector.getValueType()).toBe(AttributeTypes.TILE)
  })
  it('should return the correct value when queried', () => {
    const testTargetTile = createTile(1, 1)
    const testState = { grid: {
      tiles: [
        [createTile(0, 0), createTile(0, 1), createTile(0, 2)],
        [createTile(1, 0), testTargetTile, createTile(1, 2)]
      ]
    } }
    // TODO: should triggerArgs be an object with properties instead, maybe?
    const testTriggerArguments = testTargetTile

    const selector = new SelectorValueSelectedTile()

    const valueFromState = selector.getValue(testState, testTriggerArguments)
    const actualValue = valueFromState(testState)

    expect(actualValue).toBe(testTargetTile)
  })
})
