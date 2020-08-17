import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { selectOptionWithLabel } from '../utils/VueSelectUtils'
import TriggerTypes from '@/utils/TriggerTypes'
import GameSpecRuleListItem from '@/components/GameSpecRuleListItem.vue'
import Attribute from '@/utils/Attribute'
import AttributeTypes from '@/utils/AttributeTypes'
import Rule from '@/utils/Rule'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('GameSpecRuleListItem', () => {
  it('can be set to "When the game starts, set the value of attribute "Spaces Left" to 4"', async () => {
    const store = new Vuex.Store({
      state: {
        gameSpec: {
          gameAttributes: [
            new Attribute('Spaces Left', AttributeTypes.NUMBER)
          ]
        }
      }
    })
    const wrapper = mount(GameSpecRuleListItem, {
      propsData: {
        rule: new Rule()
      },
      store,
      localVue
    })

    // Do not trust the IDE if it tells you 'await' does nothing!
    // Removing it in some places causes the tests to fail because
    // the next get() triggers before the slotted components update.
    // (Try it out for 'set the value of ... to ...' and see for yourself)

    const triggerSelect = wrapper.get('.rule-trigger')
    await selectOptionWithLabel(triggerSelect.vm, TriggerTypes.GAME_START)

    const effectSelect = wrapper.get('.rule-effect')
    await selectOptionWithLabel(effectSelect.vm, 'set the value of ... to ...')

    const attributeTypeSelect = effectSelect.get('.selector-attribute-type')
    await selectOptionWithLabel(attributeTypeSelect.vm, 'game attribute ...')

    const attributeNameSelect = attributeTypeSelect.get('.selector-attribute-name')
    await selectOptionWithLabel(attributeNameSelect.vm, 'Spaces Left')

    const valueTypeSelect = effectSelect.get('.selector-value-type')
    await selectOptionWithLabel(valueTypeSelect.vm, 'number: ...')

    const numberSelect = valueTypeSelect.get('.selector-value-number-type')
    await selectOptionWithLabel(numberSelect.vm, '(type a value)')

    const numberInput = numberSelect.get('input')
    numberInput.element.value = 4
    numberInput.trigger('blur')

    expect(wrapper.emitted('rule-change')).toBeTruthy()
    // expect(wrapper.emitted('rule-change')[0]).toEqual(/* ...? */)
  })
})
