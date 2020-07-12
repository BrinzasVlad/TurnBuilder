import AttributeTypes from '@/utils/AttributeTypes.js'
export default class GameAttribute {
  constructor (name, type, editable = true) {
    this._name = name
    this._type = type
    this._editable = editable
  }

  set name (value) {
    if (typeof value !== 'string') throw new Error('not a string') // TODO: are errors thrown correctly?
    else this._name = value
  }

  get name () { return this._name }

  set type (value) {
    if (!AttributeTypes.allValues.includes(value)) throw new Error('not an attribute type') // TODO: are errors thrown correctly?
    else this._type = value
  }

  get type () { return this._type }

  get isEditable () {
    return this._editable
  }

  get isValid () {
    if (undefined === this._name || this._name === '' ||
    undefined === this._type) { return false } else { return true }
  }
}
