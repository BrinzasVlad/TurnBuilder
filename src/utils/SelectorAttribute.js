export default class GameSelectorAttribute {
  /**
   * Returns the attribute that this selector is selecting. (The Attribute
   * object, not its value!)
   *
   * For instance, if this is a selector that selects the game attribute 'Spaces
   * Left', it will return that game attribute. Or if this is a selector that
   * selects the attribute 'Owner' of a random piece, it will return the attribute
   * instance of that piece.
   */
  getAttribute () {
    throw new Error('Selector ' + this.constructor.name + ' does not have method getAttribute() implemented')
  }
}
