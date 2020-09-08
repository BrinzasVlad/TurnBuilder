import SelectorValueExactPlayer from '@/js-classes/SelectorValueExactPlayer'
import { createPlayer } from '../../utils/GamePlayObjectUtils'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorValueExactPlayer.js', () => {
  it('should correctly indicate its type even without an assigned value', () => {
    const selector = new SelectorValueExactPlayer()
    expect(selector.getValueType()).toBe(AttributeTypes.PLAYER)
  })
  it('should provide the correct value when queried', () => {
    const testPlayerNumber = 4
    const testTargetPlayer = createPlayer(0)
    const testState = { players: [createPlayer(3), createPlayer(2), createPlayer(1), testTargetPlayer] }

    const selector = new SelectorValueExactPlayer(testPlayerNumber)

    const valueFromState = selector.getValue(testState, {})
    const actualPlayer = valueFromState(testState)

    expect(actualPlayer).toBe(testTargetPlayer)
  })
})
