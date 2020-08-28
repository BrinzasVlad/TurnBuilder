import TriggerTypes from '@/utils/TriggerTypes'

export default class Rule {
  constructor (trigger, effect) {
    this._trigger = trigger
    this._effect = effect
  }

  set trigger (value) {
    if (!TriggerTypes.allValues.includes(value)) {
      throw new Error('not a valid trigger') // TODO: are errors thrown correctly?
    }
    this._trigger = value
  }

  get trigger () { return this._trigger }

  set effect (value) {
    // TODO: check that what we get is actually an effect
    this._effect = value
  }

  get effect () { return this._effect }
}
