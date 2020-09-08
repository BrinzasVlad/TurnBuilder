import SelectorAttribute from './SelectorAttribute'

export default class SelectorAttributeFromAttr extends SelectorAttribute {
  constructor (valueSelector, attribute) {
    super()
    this._valueSelector = valueSelector
    this._attribute = attribute
  }

  set valueSelector (newValueSelector) {
    // TODO: maybe we should check that this selects a piece, player or tile?
    this._valueSelector = newValueSelector
  }

  get valueSelector () { return this._valueSelector }

  set attribute (newAttribute) {
    // TODO: maybe we should check this is actually an Attribute object?
    this._attribute = newAttribute
  }

  get attribute () { return this._attribute }

  getAttributeType () {
    if (this._attribute) {
      return this._attribute.type
    } else return undefined
  }

  getAttribute (gameState, triggerArgs) {
    return {
      attributeName: this._attribute.name,
      objectFromState: this.valueSelector.getValue(gameState, triggerArgs)
    }
  }
}
