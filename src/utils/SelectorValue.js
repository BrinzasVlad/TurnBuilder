export default class GameSelectorValue {
  /**
   * Returns the value that this selector is selecting.
   *
   * For example, if this is a selector that selects a random tile,
   * a random tile object will be returned. Or if this is a selector that
   * selects the result of a multiplication operation and its operands
   * have values 2 and 6, then this method will return the number 12.
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
