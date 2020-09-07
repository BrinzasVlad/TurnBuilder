import Effect from './Effect'

export default class EffectChangeAttributeBy extends Effect {
  constructor (attributeSelector, valueToChangeBy) {
    super()
    this._attributeSelector = attributeSelector
    this._valueToChangeBy = valueToChangeBy
  }

  set attributeSelector (newAttributeSelector) {
    // TODO: test that it really is an attribute selector
    this._attributeSelector = newAttributeSelector
  }

  get attributeSelector () { return this._attributeSelector }

  set valueToChangeBy (newValueToChangeBy) {
    // TODO: test that it is a number
    this._valueToChangeBy = newValueToChangeBy
  }

  get valueToChangeBy () { return this._valueToChangeBy }

  execute (gameState, dispatch, triggerArgs) {
    const { attributeName, objectFromState } = this._attributeSelector.getAttribute(gameState, triggerArgs)
    const valueFromState = (gameState) => {
      return objectFromState(gameState)[attributeName] + this._valueToChangeBy
    }

    dispatch('setAttributeValue', { attributeName, objectFromState, valueFromState })
  }
}
