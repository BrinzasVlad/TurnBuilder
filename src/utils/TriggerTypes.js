import { addAllValuesProperty } from '@/utils/EnumUtils.js'
import SpecialOptions from '@/utils/SpecialOptions.js'

/**
 * An enumeration that contains the possible types of
 * triggers that a rule can have
 */
export default Object.freeze(addAllValuesProperty({
  GAME_START: 'the game starts',
  TILE_SELECTED: 'the current player selects a tile',
  PIECE_SELECTED: 'the current player selects a piece',
  /**
   * Return the special options associated to the given trigger
   * (as an array), as per SpecialOptions
   * @param {TriggerType} triggerType The type of trigger
   * for which one wants to find the special options
   */
  specialOptions (triggerType) {
    switch (triggerType) {
      case this.TILE_SELECTED: return [SpecialOptions.TILE_SELECTED]
      case this.PIECE_SELECTED: return [SpecialOptions.PIECE_SELECTED]
      default: return []
    }
  }
}))
