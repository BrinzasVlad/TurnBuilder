import SelectorValue from './SelectorValue'
import AttributeTypes from './AttributeTypes'

export default class GameSelectorValueExactNumber extends SelectorValue {
  constructor (initialValue) {
    super()
    this._value = initialValue
  }

  set value (newValue) {
    if (typeof newValue !== 'number') throw new TypeError('Expected number value but received ' + typeof newValue)
    this._value = newValue
  }

  get value () { return this._value }

  getValueType () {
    return AttributeTypes.NUMBER
  }

  getValue (_gameState, _triggerArgs) {
    return this._value
  }
}
