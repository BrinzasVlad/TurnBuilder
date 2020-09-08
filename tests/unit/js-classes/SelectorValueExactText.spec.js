import SelectorValueExactText from '@/js-classes/SelectorValueExactText'
import AttributeTypes from '@/utils/AttributeTypes'

describe('SelectorValueExactText', () => {
  it('should correctly indicate its type even without an assigned value', () => {
    const selector = new SelectorValueExactText()
    expect(selector.getValueType()).toBe(AttributeTypes.TEXT)
  })
  it('should provide the correct value when queried', () => {
    const testValue = 'Cthulhu fhtaghn'
    const selector = new SelectorValueExactText(testValue)

    const valueFromState = selector.getValue({}, {})
    const actualValue = valueFromState({})

    expect(actualValue).toBe(testValue)
  })
})
