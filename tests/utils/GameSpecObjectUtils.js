import AttributeTypes from '@/utils/AttributeTypes'
import SelectorValue from '@/js-classes/SelectorValue'
import Effect from '@/js-classes/Effect'

export function deduceTypeOf (value) {
  switch (typeof value) {
    case 'number':
      return AttributeTypes.NUMBER
    case 'string':
      return AttributeTypes.TEXT
    case 'object':
      // TODO: this is a fragile approach, as the property might be renamed
      if ('playerNumber' in value) return AttributeTypes.PLAYER
      else if ('Row' in value && 'Column' in value) return AttributeTypes.TILE
      else if ('pieceTypeName' in value) return AttributeTypes.PIECE
      // Fall-through intentional
    default:
      // If we are here, we did not figure out the type. Since testing often uses half-formed objects,
      // we'll let it slip and return null
      return null
  }
}

export function createValueSelector (valueToReturn, valueType = null) {
  let selectorValueType = valueType
  // If not given the value type, try to deduce it
  if (selectorValueType === null) selectorValueType = deduceTypeOf(valueToReturn)

  class TestSelectorValue extends SelectorValue {
    getValueType () { return selectorValueType }
    getValue (_gameState, _triggerArgs) { return (_finalGameState) => valueToReturn }
  }
  return new TestSelectorValue()
}

export function createEffect (functionToExecute = ( (_gameState, _triggerArgs) => {} )) {
  class TestEffect extends Effect {
    execute (gameState, triggerArgs) { functionToExecute(gameState, triggerArgs) }
  }
  return new TestEffect()
}
