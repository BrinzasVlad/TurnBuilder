import SelectorValue from './SelectorValue'

export default class GameSelectorValueExact extends SelectorValue {
  constructor (initialValue) {
    super()
    this._value = initialValue
  }

  set value (newValue) {
    this._value = newValue
  }

  get value () { return this._value }

  getValue (_gameState, _triggerArgs) {
    return this._value
  }
}
