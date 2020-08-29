export default class SelectorAttribute {
  /**
   * Returns the type of attribute (as per AttributeTypes) that this selector
   * points to. For instance, if this selector refers to the 'Owner' of a
   * certain piece, the type returned will (probably) be PLAYER.
   *
   * Note that this method might be called before the selector is completely
   * initialised, such as while the user is still specifying it.
   */
  getAttributeType () {
    throw new Error('Selector ' + this.constructor.name + ' does not have method getAttributeType() implemented')
  }

  /**
   * Returns the pair { attributeName, attributeFromState } for the
   * attribute pointed by this selector. The meaning of the returned values
   * is as follows:
   * * `attributeName` - The name of the attribute pointed by this selector
   * * `objectFromState` - A function that extracts the object bearing the
   * attribute pointed by this selector (for instance, if this selector refers
   * to the attribute 'Owner' of a certain piece, the objectFromState will,
   * when passed the game state, return the given piece) from the game state
   * and the trigger arguments
   *
   * Accessing objectFromState(gameState, triggerArgs)[attributeName] should
   * allow one to alter the attribute
   *
   * @param {*} gameState The complete game state at the moment when the selector was
   * queried, including data about players, tiles, pieces and game attributes. The state is
   * read-only and should not be modified.
   * @param {*} triggerArgs The parameters (if any) that were associated to the triggering
   * event, such as, for example, the piece that the user selected.
   */
  getAttribute (gameState, triggerArgs) {
    throw new Error('Selector ' + this.constructor.name + ' does not have method getAttribute() implemented')
  }
}
