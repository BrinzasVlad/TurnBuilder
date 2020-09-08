import SelectorAttributeFrom from '@/js-classes/SelectorAttributeFrom'
import { createAttribute, createValueSelector } from '../../utils/GameSpecObjectUtils'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorAttributeFrom.js', () => {
  it('should indicate the correct attribute type even without a value selector', () => {
    const attributeType = AttributeTypes.PIECE
    const selector = new SelectorAttributeFrom(
      undefined,
      createAttribute('Dummy', attributeType)
    )

    expect(selector.getAttributeType()).toBe(attributeType)
  })
  it('should indicate the correct attribute (attribute name and underlying object) when queried', () => {
    const testValue = 'Attribute Value'
    const testAttributeName = 'Attribute Name'
    const testAttributeBearingObject = { [testAttributeName]: testValue }
    const selector = new SelectorAttributeFrom(
      createValueSelector(testAttributeBearingObject),
      createAttribute(testAttributeName, AttributeTypes.TEXT)
    )

    const { attributeName, objectFromState } = selector.getAttribute({}, {})
    const actualObject = objectFromState({})

    expect(attributeName).toBe(testAttributeName)
    expect(attributeName in actualObject).toBe(true)
    expect(actualObject[attributeName]).toBe(testValue)
  })
})
