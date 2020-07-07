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
  it.only('is populated with the correct attribute values', () => {
    const wrapper = factory('TestAttribute', AttributeTypes.NUMBER)

    expect(wrapper.find('.attribute-name').element.value).toEqual('TestAttribute')
    expect(wrapper.find('.attribute-type').vm.value).toEqual(AttributeTypes.NUMBER)
  })
})