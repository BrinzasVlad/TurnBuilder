import EffectChangeAttributeBy from '@/js-classes/EffectChangeAttributeBy'
import { createValueSelector, createAttributeSelector } from '../../utils/GameSpecObjectUtils'

describe('EffectChangeAttributeBy.js', () => {
  it('should dispatch the "setAttributeValue" action', () => {
    const effect = new EffectChangeAttributeBy(
      createAttributeSelector({ dummy: 'dummy' }, 'dummy'),
      createValueSelector(1)
    )

    effect.execute({}, (actionName, _options) => {
      expect(actionName).toBe('setAttributeValue')
    }, {})
  })
  it('should dispatch the correct value to increase by', () => {
    const increment = 5
    const attributeName = 'Dummy'
    const attributeBearingObject = { [attributeName]: 7 }

    const effect = new EffectChangeAttributeBy(
      createAttributeSelector(attributeBearingObject, attributeName),
      createValueSelector(increment)
    )

    effect.execute({}, (_name, { valueFromState }) => {
      const computedValue = valueFromState({})
      expect(computedValue).toBe(attributeBearingObject[attributeName] + increment)
    }, {})
  })
  it('should dispatch the correct value to decrease by', () => {
    const decrement = 5
    const attributeName = 'Dummy'
    const attributeBearingObject = { [attributeName]: 7 }

    const effect = new EffectChangeAttributeBy(
      createAttributeSelector(attributeBearingObject, attributeName),
      createValueSelector(decrement),
      true // Set to decrease instead of increase
    )

    effect.execute({}, (_name, { valueFromState }) => {
      const computedValue = valueFromState({})
      expect(computedValue).toBe(attributeBearingObject[attributeName] - decrement)
    }, {})
  })
  it('should dispatch the correct attribute to be changed', () => {
    const testAttributeName = 'Dummy Attribute'
    const testAttributeBearingObject = { [testAttributeName]: 'Dummy Value' }

    const effect = new EffectChangeAttributeBy(
      createAttributeSelector(testAttributeBearingObject, testAttributeName),
      createValueSelector(1)
    )

    effect.execute({}, (_name, { attributeName, objectFromState }) => {
      const attributeBearingObject = objectFromState({})

      expect(attributeName).toBe(testAttributeName)
      expect(attributeBearingObject).toBe(testAttributeBearingObject)
    }, {})
  })
})
