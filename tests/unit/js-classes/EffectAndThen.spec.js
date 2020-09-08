import EffectAndThen from '@/js-classes/EffectAndThen'
import { createEffect } from '../../utils/GameSpecObjectUtils'

describe('EffectAndThen.js', () => {
  it('should execute both child effects exactly once', () => {
    const effectOneMock = jest.fn()
    const effectTwoMock = jest.fn()
    const effect = new EffectAndThen(createEffect(effectOneMock), createEffect(effectTwoMock))

    effect.execute({}, () => {}, {})
    expect(effectOneMock).toHaveBeenCalledTimes(1)
    expect(effectTwoMock).toHaveBeenCalledTimes(1)
  })
  it('should not dispatch any actions', () => {
    const dispatchMock = jest.fn()
    const effect = new EffectAndThen(createEffect(), createEffect())

    effect.execute({}, dispatchMock, {})
    expect(dispatchMock).not.toHaveBeenCalled()
  })
  it('should execute child effects in order', () => {
    let valueToSet
    const effect = new EffectAndThen(
      createEffect( () => { valueToSet = 'first' } ),
      createEffect( () => { valueToSet = 'second' } )
    )

    effect.execute({}, () => {}, {})
    expect(valueToSet).toBe('second')
  })
})
