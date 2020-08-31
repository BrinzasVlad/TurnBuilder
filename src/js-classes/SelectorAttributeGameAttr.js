import SelectorAttribute from './SelectorAttribute'
export default class SelectorAttributeGameAttr extends SelectorAttribute {
  constructor (gameAttribute) {
    super()
    this._gameAttribute = gameAttribute
  }

  set gameAttribute (newGameAttribute) { this._gameAttribute = newGameAttribute }

  get gameAttribute () { return this._gameAttribute }

  getAttributeType () {
    if (this._gameAttribute) {
      return this._gameAttribute.type
    } else return undefined
  }

  getAttribute (_gameState, _triggerArgs) {
    return {
      attributeName: this._gameAttribute.name,
      objectFromState: (gameState) => gameState.gameAttributes
    }
  }
}
