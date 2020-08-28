export default class Effect {
  // TODO: maybe this should be a regular comment, rather than a JSDoc, since it addresses development, not usage?
  /**
   * Executes this effect, potentially dispatching a number of changes to the game state.
   * @param {*} gameState The complete game state at the moment when the effect was
   * executed, including data about players, tiles, pieces and game attributes. The state
   * is read-only and should not be directly modified. The effect should make no assumptions
   * about the game state (for example, that a selected piece still exists), since other
   * effects might have been executed before and altered the state since the triggering event.
   * The state is passed by reference and will thus change accordingly when changes occur.
   * @param {*} dispatch A function through which the effect can dispatch changes to the
   * game state. The effect may dispatch any actions defined on the Vuex store, thus changing
   * the game state. Since any such change may in turn trigger further effects, no assumptions
   * should be made about the game state (for example, that a newly-created piece is still in
   * the same position) after calling dispatch.
   * @param {*} triggerArgs The parameters (if any) that were associated to the triggering event,
   * such as, for example, the piece that the user selected.
   */
  execute (gameState, dispatch, triggerArgs) {
    throw new Error('Effect ' + this.constructor.name + ' does not have the execute() method implemented')
  }
}
