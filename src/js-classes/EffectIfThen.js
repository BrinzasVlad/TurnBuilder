import Effect from './Effect'

export default class EffectIfThen extends Effect {
  constructor (condition, effect) {
    super()
    this._condition = condition
    this._effect = effect
  }

  set condition (newCondition) {
    // TODO: maybe check this is actually a Condition object
    this._condition = newCondition
  }

  get condition () { return this._condition }

  set effect (newEffect) {
    // TODO: maybe check this is actually an Effect object
    this._effect = newEffect
  }

  get effect () { return this._effect }

  execute (gameState, dispatch, triggerArgs) {
    if (this._condition.isTrue(gameState, triggerArgs)) {
      this._effect.execute(gameState, dispatch, triggerArgs)
    }
  }
}
