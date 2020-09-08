import ConditionEqualTo from '@/js-classes/ConditionEqualTo'
import { createPlayer, createTile, createPiece } from '../../utils/GamePlayObjectUtils'
import { createValueSelector } from '../../utils/GameSpecObjectUtils'

describe('ConditionEqualTo.js', () => {
  describe('Number Comparison', () => {
    it('should assess 3 and 3 as equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(3),
        createValueSelector(3)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess 0 and 0 as equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(0),
        createValueSelector(0)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess 4 and -4 as not equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(4),
        createValueSelector(-4)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
  
  describe('Text Comparison', () => {
    it('should assess "Wolf" and "Wolf" as equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector('Wolf'),
        createValueSelector('Wolf')
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess "Wolf" and "Sheep" as not equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector('Wolf'),
        createValueSelector('Sheep')
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
    it('should assess "Wolf" and "Wolf " as not equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector('Wolf'),
        createValueSelector('Wolf ')
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
    it('should assess "Wolf" and "wolf" as not equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector('Wolf'),
        createValueSelector('wolf')
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
  
  describe('Player Comparison', () => {
    it('should assess Player 1 and Player 1 (same object reference) as equal', () => {
      const playerOne = createPlayer(1)
      const condition = new ConditionEqualTo(
        createValueSelector(playerOne),
        createValueSelector(playerOne)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Player 1 and Player 1 (different object reference) as equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createPlayer(1)),
        createValueSelector(createPlayer(1))
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Player 1 and Player 2 as not equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createPlayer(1)),
        createValueSelector(createPlayer(2))
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
  
  describe('Tile Comparison', () => {
    it('should assess Tile(1, 1) and Tile(1, 1) (same object reference, no content) as equal', () => {
      const tile = createTile(1, 1)
      const condition = new ConditionEqualTo(
        createValueSelector(tile),
        createValueSelector(tile)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 1) (same object reference, with content) as equal', () => {
      const tile = createTile(1, 1, createPiece())
      const condition = new ConditionEqualTo(
        createValueSelector(tile),
        createValueSelector(tile)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 1) (different object reference, no content) as equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createTile(1, 1)),
        createValueSelector(createTile(1, 1))
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 1) (different object reference, same content) as equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createTile(1, 1, createPiece())),
        createValueSelector(createTile(1, 1, createPiece()))
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 1) (different object reference, different content) as equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createTile(1, 1, createPiece(1, "Dummy One"))),
        createValueSelector(createTile(1, 1, createPiece(2, "Dummy Two")))
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 2) as not equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createTile(1, 1)),
        createValueSelector(createTile(1, 2))
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
    it('should assess Tile(1, 2) and Tile(2, 2) as not equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createTile(1, 2)),
        createValueSelector(createTile(2, 2))
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
  
  describe('Piece Comparison', () => {
    it('should assess Piece 1 and Piece 1 (same object reference) as equal', () => {
      const pieceOne = createPiece(1)
      const condition = new ConditionEqualTo(
        createValueSelector(pieceOne),
        createValueSelector(pieceOne)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Piece 1 and Piece 1 (different object reference) as equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createPiece(1)),
        createValueSelector(createPiece(1))
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Piece 2 and Piece 3 (same type) as not equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createPiece(2, 'DummyType')),
        createValueSelector(createPiece(3, 'DummyType'))
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
    it('should assess Piece 2 and Piece 3 (different type) as not equal', () => {
      const condition = new ConditionEqualTo(
        createValueSelector(createPiece(2, 'DummyTypeOne')),
        createValueSelector(createPiece(3, 'DummyTypeTwo'))
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
})
