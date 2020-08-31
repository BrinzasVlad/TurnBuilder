export default class SelectorValue {
  /**
   * Returns the type of value (as per AttributeTypes) that this selector
   * selects. For instance, if this selector refers to the result of a
   * multiplication, then the type returned will probably be NUMBER.
   *
   * Note that this method might be called before the selector is completely
   * initialised, such as while the user is still specifying it.
   */
  getValueType () {
    throw new Error('Selector ' + this.constructor.name + ' does not have method getValueType() implemented')
  }

  /**
   * Returns a function that selects the value this selector is selecting from the game state.
   *
   * For example, if this is a selector that selects a random tile,
   * a random tile object will be picked from the game tiles and returned. Or if this is a
   * selector that selects the result of a multiplication operation and its operands, once
   * extracted from the state themselves, have the values 2 and 6, then the returned function
   * will provide the value 12.
   *
   * @param {*} gameState The complete game state at the moment when the selector was
   * queried, including data about players, tiles, pieces and game attributes. The state is
   * read-only and should not be modified.
   * @param {*} triggerArgs The parameters (if any) that were associated to the triggering
   * event, such as, for example, the piece that the user selected.
   */
  getValue (gameState, triggerArgs) {
    throw new Error('Selector ' + this.constructor.name + ' does not have method getValue() implemented')
  }
}
