import AttributeTypes from '@/utils/AttributeTypes'
import Condition from './Condition'

export default class ConditionEqualTo extends Condition {
  constructor (firstTerm, secondTerm) {
    super()
    this._firstTerm = firstTerm
    this._secondTerm = secondTerm
  }

  set firstTerm (newTerm) {
    // TODO: check that it's a value selector and matches the other term
    this._firstTerm = newTerm
  }

  get firstTerm () { return this._firstTerm }

  set secondTerm (newTerm) {
    // TODO: check that it's a value selector and matches the other term
    this._secondTerm = newTerm
  }

  get secondTerm () { return this._secondTerm }

  isTrue (gameState, triggerArgs) {
    const firstValueFromState = this._firstTerm.getValue(gameState, triggerArgs)
    const secondValueFromState = this._secondTerm.getValue(gameState, triggerArgs)

    const firstTermValue = firstValueFromState(gameState)
    const secondTermValue = secondValueFromState(gameState)

    switch (this._firstTerm.getValueType()) {
      case AttributeTypes.NUMBER:
      case AttributeTypes.TEXT:
        return firstTermValue === secondTermValue
      case AttributeTypes.PIECE:
        return firstTermValue.id === secondTermValue.id
      case AttributeTypes.PLAYER:
        return firstTermValue.playerNumber === secondTermValue.playerNumber
      case AttributeTypes.TILE:
        return firstTermValue.Row === secondTermValue.Row && firstTermValue.Column === secondTermValue.Column
      default:
        throw new Error('Attribute type ' + this._firstTerm.getValueType() + ' does not have an associated comparison')
    }
  }
}
