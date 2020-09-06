import SelectorValue from './SelectorValue'

export default class SelectorValueOfAttribute extends SelectorValue {
  constructor (attributeSelector) {
    super()
    this._attributeSelector = attributeSelector
  }

  set attributeSelector (newAttributeSelector) {
    // TODO: maybe check this is actually a SelectorAttribute object?
    this._attributeSelector = newAttributeSelector
  }

  get attributeSelector () { return this._attributeSelector }

  getValueType () {
    return this._attributeSelector.getAttributeType()
  }

  getValue (gameState, triggerArgs) {
    const { attributeName, objectFromState } = this._attributeSelector.getAttribute(gameState, triggerArgs)
    return (gameState) => objectFromState(gameState)[attributeName]
  }
}
