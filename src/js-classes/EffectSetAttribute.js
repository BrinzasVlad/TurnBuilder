import Effect from './Effect'

export default class EffectSetAttribute extends Effect {
  constructor (attributeSelector, valueSelector) {
    super()
    this._attributeSelector = attributeSelector
    this._valueSelector = valueSelector
  }

  set attributeSelector (newAttributeSelector) {
    // TODO: maybe check that it is indeed an attribute selector
    this._attributeSelector = newAttributeSelector
  }

  get attributeSelector () { return this._attributeSelector }

  set valueSelector (newValueSelector) {
    // TODO: maybe check that it is indeed a value selector and its type matches the attribute
    this._valueSelector = newValueSelector
  }

  get valueSelector () { return this._valueSelector }

  execute (gameState, dispatch, triggerArgs) {
    const { attributeName, objectFromState } = this._attributeSelector.getAttribute(gameState, triggerArgs)
    const valueFromState = this._valueSelector.getValue(gameState, triggerArgs)

    dispatch('setAttributeValue', { attributeName, objectFromState, valueFromState })
  }
}
