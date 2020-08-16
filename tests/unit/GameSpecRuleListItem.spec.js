import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TriggerTypes from '@/utils/TriggerTypes'
import GameSpecRuleListItem from '@/components/GameSpecRuleListItem.vue'
import Attribute from '@/utils/Attribute'
import AttributeTypes from '@/utils/AttributeTypes'
import Rule from '@/utils/Rule'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('GameSpecRuleListItem', () => {
  it('can be set to "When the game starts, set the value of attribute "Spaces Left" to 4"', () => {
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
        rule: new Rule(undefined, {})
      },
      store,
      localVue
    })

    const triggerSelect = wrapper.get('.rule-trigger')
    triggerSelect.vm.select(TriggerTypes.GAME_START)

    const effectSelect = wrapper.get('.rule-effect')
    effectSelect.vm.select('set the value of ... to ...')

    const attributeTypeSelect = effectSelect.get('.selector-attribute-type')
    attributeTypeSelect.vm.select('game attribute ...')

    const attributeNameSelect = attributeTypeSelect.get('.selector-attribute-name')
    attributeNameSelect.vm.select('Spaces Left')

    const valueSelect = effectSelect.get('.selector-value-type')
    valueSelect.vm.select('number: ...')

    const valueInput = valueSelect.get('.number-input')
    valueInput.element.value = 4
    valueInput.trigger('blur')

    // expect(wrapper.emitted('rule-change')).toBeTruthy()
    // expect(wrapper.emitted('rule-change')[0]).toEqual(/* ...? */)
  })
})