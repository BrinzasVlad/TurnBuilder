import SelectorAttributeGameAttr from '@/js-classes/SelectorAttributeGameAttr'
import { createAttribute } from '../../utils/GameSpecObjectUtils'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorAttributeGameAttr.js', () => {
  it('should indicate the correct attribute type', () => {
    const attributeType = AttributeTypes.TILE
    const selector = new SelectorAttributeGameAttr(createAttribute('Dummy', attributeType))

    expect(selector.getAttributeType()).toBe(attributeType)
  })
  it('should indicate the correct attribute (attribute name from "gameAttributes") when queried', () => {
    const testAttributeName = 'Little Red Riding Hood Friend'
    const testAttributeValue = 'Wolf in a Fancy Suit'
    const testGameState = { gameAttributes: { [testAttributeName]: testAttributeValue } }
    const selector = new SelectorAttributeGameAttr(createAttribute(testAttributeName))

    const { attributeName, objectFromState } = selector.getAttribute(testGameState, {})
    const actualObject = objectFromState(testGameState)

    expect(attributeName).toBe(testAttributeName)
    expect(attributeName in actualObject).toBe(true)
    expect(actualObject[attributeName]).toBe(testAttributeValue)
  })
})
