import EffectIfThen from '@/js-classes/EffectIfThen'
import { createCondition, createEffect } from '../../utils/GameSpecObjectUtils'

describe('EffectIfThen', () => {
  it('should execute the effect exactly once if the condition is true', () => {
    const mockEffect = jest.fn()
    const effect = new EffectIfThen(
      createCondition(true),
      createEffect(mockEffect)
    )

    effect.execute({}, () => {}, {})
    expect(mockEffect).toHaveBeenCalledTimes(1)
  })
  it('should not execute the effect if the condition is false', () => {
    const mockEffect = jest.fn()
    const effect = new EffectIfThen(
      createCondition(false),
      createEffect(mockEffect)
    )

    effect.execute({}, () => {}, {})
    expect(mockEffect).not.toHaveBeenCalled()
  })
  it('should not dispatch any actions', () => {
    const dispatchMock = jest.fn()
    const effect = new EffectIfThen(
      createCondition(),
      createEffect()
    )

    effect.execute({}, dispatchMock, {})
    expect(dispatchMock).not.toHaveBeenCalled()
  })
})
