export default class GameSelectorValue {
  /**
   * Returns the value that this selector is selecting.
   *
   * For instance, if this is a selector that selects a random tile,
   * a random tile will be returned. Or if this is a selector that
   * selects the result of a multiplication operation and its operands
   * have values 2 and 6, then this method will return the number 12.
   */
  getValue () {
    throw new Error('Selector ' + this.constructor.name + ' does not have method getValue() implemented')
  }
}
