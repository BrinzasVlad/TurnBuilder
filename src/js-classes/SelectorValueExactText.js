import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from './SelectorValue'

export default class SelectorValueExactText extends SelectorValue {
  constructor (initialValue) {
    super()
    this._value = initialValue
  }

  set value (newValue) {
    if (typeof newValue !== 'string') throw new TypeError('Expected string value but received ' + typeof newValue)
    this._value = newValue
  }

  get value () { return this._value }

  getValueType () {
    return AttributeTypes.TEXT
  }

  getValue (_gameState, _triggerArgs) {
    return (_gameState) => this._value
  }
}
