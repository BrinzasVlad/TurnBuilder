import AttributeTypes from '@/utils/AttributeTypes'
export default class Attribute {
  // TODO: this is actually an overloaded constructor, but JSDoc does not seem to support that
  /**
   * Creates a new Attribute object.
   *
   * If called with a single Attribute as argument, it creates a clone of that Attribute.
   * @param {Attribute} attribute The Attribute to clone.
   *
   * If called with multiple arguments, it instead creates a new attribute from the following (in order):
   * @param {string} name The unique name of the Attribute
   * @param {AttributeTypes} type The type of value referenced by the Attribute
   * @param {boolean} [editable = true] Whether the user can change the attribute (default true)
   */
  constructor (...args) {
    let name, type, editable
    if (args[0] instanceof Attribute) {
      name = args[0]._name
      type = args[0]._type
      editable = args[0]._editable
    } else {
      name = args[0]
      type = args[1]
      if (undefined === args[2]) editable = true
      else editable = args[2]
    }

    this._name = name
    this._type = type
    this._editable = editable
  }

  set name (value) {
    if (typeof value !== 'string') {
      throw new Error('not a string') // TODO: are errors thrown correctly?
    }
    this._name = value
  }

  get name () { return this._name }

  set type (value) {
    if (!AttributeTypes.allValues.includes(value)) {
      throw new Error('not an attribute type') // TODO: are errors thrown correctly?
    }
    this._type = value
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
