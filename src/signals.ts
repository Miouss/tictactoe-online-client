export enum GAME {
  MAKE_MOVE = "makeMove",
  WIN = "gameWin",
  REPLAY = "replayGame",
  MOVE_MADE = "moveMade",
  OVER = "gameOver",
}

export enum LOBBY {
  CREATE = "createLobby",
  JOIN = "joinLobby",
  LEAVE = "leaveLobby",
  CREATED = "lobbyCreated",
  JOINED = "lobbyJoined",
  FULL = "lobbyFull",
  EXISTS = "lobbyAlreadyExists",
  NOT_FOUND = "lobbyNotFound",
}

export enum PLAYER {
  JOINED = "playerJoined",
  LEFT = "leavePlayer",
  NAME_TAKEN = "playerNameTaken",
  ALREADY_JOINED = "playerAlreadyJoined",
  OPPONENT_LEFT = "opponentLeft",
}
