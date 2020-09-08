import EffectCreatePiece from '@/js-classes/EffectCreatePiece'
import { createValueSelector } from '../../utils/GameSpecObjectUtils'
import { createTile, createPlayer } from '../../utils/GamePlayObjectUtils'

function createPieceType (name = "Dummy", icon = "dummy.png") {
  return { name, icon, attributes: [] }
}
describe('EffectCreatePiece.js', () => {
  it('should dispatch the "createPiece" action', () => {
    const effect = new EffectCreatePiece(
      createPieceType(),
      createValueSelector(createTile()),
      createValueSelector(createPlayer())
    )

    effect.execute({}, (actionName, _options) => {
      expect(actionName).toBe('createPiece')
    }, {})
  })
  it('should dispatch the correct piece name', () => {
    const pieceTypeName = "Specific Dummy Piece Type"
    const effect = new EffectCreatePiece(
      createPieceType(pieceTypeName),
      createValueSelector(createTile()),
      createValueSelector(createPlayer())
    )

    effect.execute({}, (_name, { pieceName }) => {
      expect(pieceName).toBe(pieceTypeName)
    }, {})
  })
  it('should dispatch the correct piece tile', () => {
    const pieceTile = createTile(1, 3)
    const effect = new EffectCreatePiece(
      createPieceType(),
      createValueSelector(pieceTile),
      createValueSelector(createPlayer())
    )

    effect.execute({}, (_name, { tileFromState }) => {
      const actualTile = tileFromState({})
      expect(actualTile).toBe(pieceTile)
    }, {})
  })
  it('should dispatch the correct piece owner', () => {
    const pieceOwner = createPlayer(4)
    const effect = new EffectCreatePiece(
      createPieceType(),
      createValueSelector(createTile),
      createValueSelector(pieceOwner)
    )

    effect.execute({}, (_name, { ownerFromState }) => {
      const actualOwner = ownerFromState({})
      expect(actualOwner).toBe(pieceOwner)
    }, {})
  })
})
