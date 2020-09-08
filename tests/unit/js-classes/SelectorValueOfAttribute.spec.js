import SelectorValueOfAttribute from '@/js-classes/SelectorValueOfAttribute'
import { createAttributeSelector } from '../../utils/GameSpecObjectUtils'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorValueOfAttribute.js', () => {
  it('should indicate the correct type', () => {
    const selector = new SelectorValueOfAttribute(
      createAttributeSelector({ numberAttr: 17 }, 'numberAttr')
    )
    expect(selector.getValueType()).toBe(AttributeTypes.NUMBER)
  })
  it('should return the correct value when queried', () => {
    const testAttributeName = 'Bricks in the Wall'
    const testAttributeValue = 99
    const testAttributeBearingObject = { [testAttributeName]: testAttributeValue }

    const selector = new SelectorValueOfAttribute(
      createAttributeSelector(testAttributeBearingObject, testAttributeName)
    )

    const valueFromState = selector.getValue({}, {})
    const actualValue = valueFromState({})

    expect(actualValue).toBe(testAttributeValue)
  })
})
