import Effect from './Effect'

export default class EffectChangeAttributeBy extends Effect {
  constructor (attributeSelector, valueSelector, shouldDecrease = false) {
    super()
    this._attributeSelector = attributeSelector
    this._valueSelector = valueSelector
    this._shouldDecrease = shouldDecrease
  }

  set attributeSelector (newAttributeSelector) {
    // TODO: test that it really is an attribute selector
    this._attributeSelector = newAttributeSelector
  }

  get attributeSelector () { return this._attributeSelector }

  set valueSelector (newValueSelector) {
    // TODO: test that it is a number
    this._valueSelector = newValueSelector
  }

  get valueSelector () { return this._valueSelector }

  set shouldDecrease (newValue) {
    // TODO: test that it is a boolean
    this._shouldDecrease = newValue
  }

  get shouldDecrease () { return this._shouldDecrease }

  execute (gameState, dispatch, triggerArgs) {
    const { attributeName, objectFromState } = this._attributeSelector.getAttribute(gameState, triggerArgs)
    const changeFromState = this._valueSelector.getValue(gameState, triggerArgs)

    const valueFromState = (gameState) => {
      if (this._shouldDecrease) return objectFromState(gameState)[attributeName] - changeFromState(gameState)
      else return objectFromState(gameState)[attributeName] + changeFromState(gameState)
    }

    dispatch('setAttributeValue', { attributeName, objectFromState, valueFromState })
  }
}
