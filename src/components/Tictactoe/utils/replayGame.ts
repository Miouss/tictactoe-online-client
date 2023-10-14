import { Socket } from "socket.io-client";
import { Dispatch, SetStateAction } from "react";
import { resetFields } from "./";
import { SquareState, GameIssue, ResetBoard } from "../types";
import { GAME } from "../../../signals";

export function replayGame(
  socket: Socket,
  setSquaresStates: Dispatch<SetStateAction<Array<SquareState>>>,
  setGameIssue: Dispatch<SetStateAction<GameIssue>>,
  setResetSquares: Dispatch<SetStateAction<ResetBoard>>
) {
  resetFields(setSquaresStates, setGameIssue, setResetSquares);
  socket.emit(GAME.REPLAY, socket.id);
}
