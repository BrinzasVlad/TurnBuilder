import Effect from './Effect'

export default class EffectCreatePiece extends Effect {
  constructor (piece, tileSelector, ownerSelector) {
    super()
    this._piece = piece
    this._tileSelector = tileSelector
    this._ownerSelector = ownerSelector
  }

  set piece (newPiece) {
    // TODO: maybe check that it is indeed a Piece object
    this._piece = newPiece
  }

  get piece () { return this._piece }

  set tileSelector (newTileSelector) {
    // TODO: maybe check that it is indeed a tile selector
    this._tileSelector = newTileSelector
  }

  get tileSelector () { return this._tileSelector }

  set ownerSelector (newOwnerSelector) {
    // TODO: maybe check that it is indeed a player selector
    this._ownerSelector = newOwnerSelector
  }

  get ownerSelector () { return this._ownerSelector }

  execute (gameState, dispatch, triggerArgs) {
    const pieceName = this._piece.name
    const targetTile = this._tileSelector.getValue(gameState, triggerArgs)
    const owner = this.ownerSelector.getValue(gameState, triggerArgs)

    dispatch('createPiece', { pieceName, targetTile, owner })
  }
}
