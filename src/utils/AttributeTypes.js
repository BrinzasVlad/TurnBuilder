import { addAllValuesProperty } from '@/utils/EnumUtils.js'

/**
 * An enumeration that contains the possible types of values that
 * an attribute can take.
 */
export default Object.freeze(addAllValuesProperty({
  NUMBER: 'number',
  WORD: 'word',
  PLAYER: 'player',
  TILE: 'tile',
  PIECE: 'piece',
  /**
   * Converts an AttributeTypes value into the corresponding
   * type, as expected by Vue for declaring e.g. props
   * @param enumValue The AttributeTypes value to convert
   */
  toVuePropType: function (enumValue) {
    switch (enumValue) {
      case this.NUMBER: return Number
      case this.WORD: return String
      case this.PLAYER: return Object // TODO: use actual classes - Vue accepts them
      case this.TILE: return Object
      case this.PIECE: return Object
    }
  },
  /**
   * Returns the AttributeTypes value matching the given Javascript
   * entity. For instance, a number yields AttributeTypes.NUMBER and
   * a string yields AttributeTypes.WORD.
   * For entities that do not match any value of AttributeTypes,
   * this function returns null.
   * @param {any} entity The Javascript entity to be assessed
   */
  fromJavascriptEntity: function (entity) {
    switch (typeof entity) {
      case 'number': return this.NUMBER
      case 'string': return this.WORD
      case 'object':
        // TODO: check whether it is a player, piece or tile via instanceof
    }
    return null
  }
}))
