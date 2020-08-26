import { mount } from '@vue/test-utils'
import GameSpecAttributeListItem from '@/components/GameSpecAttributeListItem.vue'
import AttributeTypes from '@/utils/AttributeTypes.js'

const factory = (attributeName = '', attributeType = AttributeTypes.WORD) => {
  // We need "mount" since the v-select element is not plain HTML
  // but rather a nested Vue component
  return mount(GameSpecAttributeListItem, {
    propsData: {
      attribute: { name: attributeName, type: attributeType }
    }
  })
}
describe('GameSpecAttributeListItem', () => {
  it('is populated with the correct attribute values', () => {
    const wrapper = factory('TestAttribute', AttributeTypes.NUMBER)

    expect(wrapper.find('.attribute-name').element.value).toEqual('TestAttribute')
    expect(wrapper.find('.attribute-type').vm.value).toEqual(AttributeTypes.NUMBER)
  })
  it('emits correct update event when attribute name edited and clicked away from', () => {
    const wrapper = factory('TestAttribute', AttributeTypes.NUMBER)

    const nameInput = wrapper.find('.attribute-name')
    nameInput.element.value = 'ChangedAttribute'
    nameInput.trigger('blur')

    expect(wrapper.emitted('attribute-name-change')).toBeTruthy()
    expect(wrapper.emitted('attribute-name-change')[0]).toEqual(['ChangedAttribute'])
  })
  it('emits correct update event when attribute type changed', () => {
    const wrapper = factory('TestAttribute', AttributeTypes.NUMBER)

    const attributeSelect = wrapper.find('.attribute-type')
    attributeSelect.vm.select(AttributeTypes.TEXT)

    expect(wrapper.emitted('attribute-type-change')).toBeTruthy()
    expect(wrapper.emitted('attribute-type-change')[0]).toEqual([AttributeTypes.TEXT])
  })
})
