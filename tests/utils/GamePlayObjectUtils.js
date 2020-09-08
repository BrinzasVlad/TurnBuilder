import ConditionTileEmpt from "@/js-classes/ConditionTileEmpty"

export function createPlayer (playerNumber = 1) {
  return { playerNumber }
}

export function createTile (row = 0, column = 0, content = null) {
  return { Row: row, Column: column, Content: content }
}

export function createPiece (id = 0, typeName = "Dummy", icon = "dummy.png") {
  return { id, icon, pieceTypeName: typeName }
}
