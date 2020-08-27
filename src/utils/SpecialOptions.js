import { addAllValuesProperty } from '@/utils/EnumUtils.js'

/**
 * An enumeration that contains the possible types
 * of special options that are unlocked only for
 * certain types of triggers (for example, the
 * 'piece selected' option is only available if
 * the trigger was someone selecting a piece in the
 * first place)
 */
export default Object.freeze(addAllValuesProperty({
  TILE_SELECTED: 'tile selected',
  PIECE_SELECTED: 'piece selected'
}))
