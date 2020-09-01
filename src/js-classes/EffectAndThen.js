import Effect from './Effect'

export default class EffectAndThen extends Effect {
  constructor (firstEffect, andThenEffect) {
    super()
    this._firstEffect = firstEffect
    this._andThenEffect = andThenEffect
  }

  set firstEffect (newFirstEffect) {
    if (newFirstEffect instanceof Effect) this._firstEffect = newFirstEffect
    else throw new TypeError('Expected instance of Effect, but received ' + newFirstEffect)
  }

  get firstEffect () { return this._firstEffect }

  set andThenEffect (newAndThenEffect) {
    if (newAndThenEffect instanceof Effect) this._andThenEffect = newAndThenEffect
    else throw new TypeError('Expected instance of Effect, but received ' + newAndThenEffect)
  }

  get andThenEffect () { return this._andThenEffect }

  execute (gameState, dispatch, triggerArgs) {
    this._firstEffect.execute(gameState, dispatch, triggerArgs)
    this._andThenEffect.execute(gameState, dispatch, triggerArgs)
  }
}
