import SelectorAttribute from './SelectorAttribute'
export default class GameSelectorAttributeGameAttr extends SelectorAttribute {
  constructor (gameAttribute) {
    super()
    this._gameAttribute = gameAttribute
  }

  set gameAttribute (newGameAttribute) { this._gameAttribute = newGameAttribute }

  get gameAttribute () { return this._gameAttribute }
  getAttribute () {
    return this._gameAttribute
  }
}
