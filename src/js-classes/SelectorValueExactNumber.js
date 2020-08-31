import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValueExactNumber extends SelectorValue {
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
    return (_gameState) => this._value
  }
}
