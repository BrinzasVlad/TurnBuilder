import SelectorValueExactNumber from '@/js-classes/SelectorValueExactNumber'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorValueExactNumber', () => {
  it('should correctly indicate its type even without an assigned value', () => {
    const selector = new SelectorValueExactNumber()
    expect(selector.getValueType()).toBe(AttributeTypes.NUMBER)
  })
  it('should provide the correct value when queried', () => {
    const testValue = 15
    const selector = new SelectorValueExactNumber(testValue)

    const valueFromState = selector.getValue({}, {})
    const actualValue = valueFromState({})

    expect(actualValue).toBe(testValue)
  })
})
