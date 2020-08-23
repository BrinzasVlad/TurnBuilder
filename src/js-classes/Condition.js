export default class GameCondition {
  /**
   * Assesses whether the condition represented by this object is true, given the current game
   * state and the parameters of the triggering event. Returns a boolean value (true if the
   * condition holds, false if it does not).
   * @param {*} gameState The complete game state at the moment when the condition was
   * assessed, including data about players, tiles, pieces and game attributes. The state is
   * read-only and should not be modified.
   * @param {*} triggerArgs The parameters (if any) that were associated to the triggering
   * event, such as, for example, the piece that the user selected.
   */
  isTrue (gameState, triggerArgs) {
    throw new Error('Condition ' + this.constructor.name + ' does not have the assess() method implemented')
  }
}
