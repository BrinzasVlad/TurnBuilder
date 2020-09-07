import Effect from './Effect'

export default class EffectPlayerWinsGame extends Effect {
  constructor (playerSelector) {
    super()
    this._playerSelector = playerSelector
  }

  set playerSelector (newPlayerSelector) {
    // TODO: check that it actually is a value selector returning a player
    this._playerSelector = newPlayerSelector
  }

  get playerSelector () { return this._playerSelector }

  execute (gameState, dispatch, triggerArgs) {
    const playerFromState = this._playerSelector.getValue(gameState, triggerArgs)

    dispatch('endGame', { winnerFromState: playerFromState })
  }
}
