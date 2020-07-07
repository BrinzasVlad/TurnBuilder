import { addAllValuesProperty } from '../utils/EnumUtils.js'

export default Object.freeze(addAllValuesProperty({
  NUMBER: 'number',
  WORD: 'word',
  PLAYER: 'player',
  TILE: 'tile',
  PIECE: 'piece',
  toVuePropType: function (enumValue) {
    switch (enumValue) {
      case this.NUMBER: return Number
      case this.WORD: return String
      case this.PLAYER: return Object
      case this.TILE: return Object
      case this.PIECE: return Object
    }
  }
}))
