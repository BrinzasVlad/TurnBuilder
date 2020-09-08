import EffectPlayerWinsGame from '@/js-classes/EffectPlayerWinsGame'
import { createValueSelector } from '../../utils/GameSpecObjectUtils'
import { createPlayer } from '../../utils/GamePlayObjectUtils'

describe('EffectPlayerWinsGame.js', () => {
  it('should dispatch the "end game" action', () => {
    const effect = new EffectPlayerWinsGame(createValueSelector(createPlayer()))

    effect.execute({}, (actionName, _options) => {
      expect(actionName).toBe('endGame')
    }, {})
  })
  it('should dispatch the correct player', () => {
    const player = createPlayer(3)
    const effect = new EffectPlayerWinsGame(createValueSelector(player))

    effect.execute({}, (_name, { winnerFromState }) => {
      const actualWinner = winnerFromState({})
      expect(actualWinner).toBe(player)
    }, {})
  })
})
