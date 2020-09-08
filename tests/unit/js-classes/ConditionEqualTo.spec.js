import ConditionEqualTo from '@/js-classes/ConditionEqualTo'
import SelectorValue from '@/js-classes/ConditionEqualTo'
import AttributeTypes from '@/utils/AttributeTypes'
import { createPlayer, createTile, createPiece } from '../../utils/GamePlayObjectUtils'

function valueSelector (valueToReturn, valueType) {
  class TestSelector extends SelectorValue {
    getValueType () { return valueType }
    getValue (_gameState, _triggerArgs) { return (_finalGameState) => valueToReturn }
  }
  return new TestSelector()
}
describe('ConditionEqualTo.js', () => {
  describe('Number Comparison', () => {
    it('should assess 3 and 3 as equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(3, AttributeTypes.NUMBER),
        valueSelector(3, AttributeTypes.NUMBER)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess 0 and 0 as equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(0, AttributeTypes.NUMBER),
        valueSelector(0, AttributeTypes.NUMBER)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess 4 and -4 as not equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(4, AttributeTypes.NUMBER),
        valueSelector(-4, AttributeTypes.NUMBER)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
  
  describe('Text Comparison', () => {
    it('should assess "Wolf" and "Wolf" as equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector('Wolf', AttributeTypes.TEXT),
        valueSelector('Wolf', AttributeTypes.TEXT)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess "Wolf" and "Sheep" as not equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector('Wolf', AttributeTypes.TEXT),
        valueSelector('Sheep', AttributeTypes.TEXT)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
    it('should assess "Wolf" and "Wolf " as not equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector('Wolf', AttributeTypes.TEXT),
        valueSelector('Wolf ', AttributeTypes.TEXT)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
    it('should assess "Wolf" and "wolf" as not equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector('Wolf', AttributeTypes.TEXT),
        valueSelector('wolf', AttributeTypes.TEXT)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
  
  describe('Player Comparison', () => {
    it('should assess Player 1 and Player 1 (same object reference) as equal', () => {
      const playerOne = createPlayer(1)
      const condition = new ConditionEqualTo(
        valueSelector(playerOne, AttributeTypes.PLAYER),
        valueSelector(playerOne, AttributeTypes.PLAYER)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Player 1 and Player 1 (different object reference) as equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createPlayer(1), AttributeTypes.PLAYER),
        valueSelector(createPlayer(1), AttributeTypes.PLAYER)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Player 1 and Player 2 as not equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createPlayer(1), AttributeTypes.PLAYER),
        valueSelector(createPlayer(2), AttributeTypes.PLAYER)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
  
  describe('Tile Comparison', () => {
    it('should assess Tile(1, 1) and Tile(1, 1) (same object reference, no content) as equal', () => {
      const tile = createTile(1, 1)
      const condition = new ConditionEqualTo(
        valueSelector(tile, AttributeTypes.TILE),
        valueSelector(tile, AttributeTypes.TILE)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 1) (same object reference, with content) as equal', () => {
      const tile = createTile(1, 1, createPiece())
      const condition = new ConditionEqualTo(
        valueSelector(tile, AttributeTypes.TILE),
        valueSelector(tile, AttributeTypes.TILE)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 1) (different object reference, no content) as equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createTile(1, 1), AttributeTypes.TILE),
        valueSelector(createTile(1, 1), AttributeTypes.TILE)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 1) (different object reference, same content) as equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createTile(1, 1, createPiece()), AttributeTypes.TILE),
        valueSelector(createTile(1, 1, createPiece()), AttributeTypes.TILE)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 1) (different object reference, different content) as equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createTile(1, 1, createPiece(1, "Dummy One")), AttributeTypes.TILE),
        valueSelector(createTile(1, 1, createPiece(2, "Dummy Two")), AttributeTypes.TILE)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Tile(1, 1) and Tile(1, 2) as not equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createTile(1, 1), AttributeTypes.TILE),
        valueSelector(createTile(1, 2), AttributeTypes.TILE)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
    it('should assess Tile(1, 2) and Tile(2, 2) as not equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createTile(1, 2), AttributeTypes.TILE),
        valueSelector(createTile(2, 2), AttributeTypes.TILE)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
  
  describe('Piece Comparison', () => {
    it('should assess Piece 1 and Piece 1 (same object reference) as equal', () => {
      const pieceOne = createPiece(1)
      const condition = new ConditionEqualTo(
        valueSelector(pieceOne, AttributeTypes.PIECE),
        valueSelector(pieceOne, AttributeTypes.PIECE)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Piece 1 and Piece 1 (different object reference) as equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createPiece(1), AttributeTypes.PIECE),
        valueSelector(createPiece(1), AttributeTypes.PIECE)
      )
      expect(condition.isTrue({}, {})).toBe(true)
    })
    it('should assess Piece 2 and Piece 3 (same type) as not equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createPiece(2, 'DummyType'), AttributeTypes.PIECE),
        valueSelector(createPiece(3, 'DummyType'), AttributeTypes.PIECE)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
    it('should assess Piece 2 and Piece 3 (different type) as not equal', () => {
      const condition = new ConditionEqualTo(
        valueSelector(createPiece(2, 'DummyTypeOne'), AttributeTypes.PIECE),
        valueSelector(createPiece(3, 'DummyTypeTwo'), AttributeTypes.PIECE)
      )
      expect(condition.isTrue({}, {})).toBe(false)
    })
  })
})
