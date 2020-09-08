import ConditionTileEmpty from '@/js-classes/ConditionTileEmpty'
import { createTile, createPiece } from '../../utils/GamePlayObjectUtils'
import { createValueSelector } from '../../utils/GameSpecObjectUtils'

describe('ConditionTileEmpty.js', () => {
  it('should assess tile with content undefined as empty', () => {
    const condition = new ConditionTileEmpty(createValueSelector(createTile(0, 0, undefined)))
    expect(condition.isTrue()).toBe(true)
  })
  it('should assess tile with content null as empty', () => {
    const condition = new ConditionTileEmpty(createValueSelector(createTile(0, 0, null)))
    expect(condition.isTrue()).toBe(true)
  })
  it('should assess tile with piece inside undefined as not empty', () => {
    const condition = new ConditionTileEmpty(createValueSelector(createTile(0, 0, createPiece())))
    expect(condition.isTrue()).toBe(false)
  })
})
