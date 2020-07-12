import Attribute from '@/utils/Attribute.js'
import AttributeTypes from '@/utils/AttributeTypes.js'

describe('Attribute.js', () => {
  it('should be editable by default', () => {
    const attribute = new Attribute()
    expect(attribute.isEditable).toBe(true)
  })
  it('should be valid if name and type are specified', () => {
    const attribute = new Attribute('AttrName', AttributeTypes.NUMBER)
    expect(attribute.isValid).toBe(true)
  })
  it('should be invalid if name is empty or unspecified', () => {
    let attribute = new Attribute(undefined, AttributeTypes.NUMBER)
    expect(attribute.isValid).toBe(false)
    attribute = new Attribute('', AttributeTypes.NUMBER)
    expect(attribute.isValid).toBe(false)
  })
  it('should be invalid if type is empty', () => {
    const attribute = new Attribute('AttrName', undefined)
    expect(attribute.isValid).toBe(false)
  })
})
