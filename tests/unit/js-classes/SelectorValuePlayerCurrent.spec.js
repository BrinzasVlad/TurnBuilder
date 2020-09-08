import SelectorValuePlayerCurrent from '@/js-classes/SelectorValuePlayerCurrent'
import { createPlayer } from '../../utils/GamePlayObjectUtils'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorValuePlayerCurrent.js', () => {
  it('should correctly indicate its type', () => {
    const selector = new SelectorValuePlayerCurrent()
    expect(selector.getValueType()).toBe(AttributeTypes.PLAYER)
  })
  it('should return the correct value when queried', () => {
    const testTargetPlayer = createPlayer(5)
    const testState = { 
      gameAttributes: { 'Current Player': testTargetPlayer }
    }

    const selector = new SelectorValuePlayerCurrent()

    const valueFromState = selector.getValue(testState, {})
    const actualValue = valueFromState(testState)

    expect(actualValue).toBe(testTargetPlayer)
  })
})
