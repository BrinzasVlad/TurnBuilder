import EffectSetAttribute from '@/js-classes/EffectSetAttribute'
import { createValueSelector, createAttributeSelector } from '../../utils/GameSpecObjectUtils'

describe('EffectSetAttribute.js', () => {
  it('should dispatch the "setAttribute" action', () => {
    const effect = new EffectSetAttribute(
      createAttributeSelector({ dummy: 'dummy' }, 'dummy'),
      createValueSelector('special dummy')
    )

    effect.execute({}, (actionName, _options) => {
      expect(actionName).toBe('setAttributeValue')
    }, {})
  })
  it('should dispatch the correct new value', () => {
    const newValue = 'Supercalifragilisticexpialidocius'
    const effect = new EffectSetAttribute(
      createAttributeSelector({ dummy: 'old value' }, 'dummy'),
      createValueSelector(newValue)
    )

    effect.execute({}, (_name, { valueFromState }) => {
      const actualValue = valueFromState({})
      expect(actualValue).toBe(newValue)
    }, {})
  })
  it('should dispatch the correct attribute to be changed', () => {
    const testAttributeName = 'Dummy Attribute'
    const testAttributeBearingObject = { [testAttributeName]: 'Dummy Value' }

    const effect = new EffectSetAttribute(
      createAttributeSelector(testAttributeBearingObject, testAttributeName),
      createValueSelector('New Value to Set')
    )

    effect.execute({}, (_name, { attributeName, objectFromState }) => {
      const attributeBearingObject = objectFromState({})

      expect(attributeName).toBe(testAttributeName)
      expect(attributeBearingObject).toBe(testAttributeBearingObject)
    }, {})
  })
})
