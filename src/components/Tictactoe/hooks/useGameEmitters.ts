import { useEffect } from "react";
import { Socket } from "socket.io-client";
import { isGameWin } from "../utils";
import { SquareState } from "../types";
import { SideSign } from "@types";
import { GAME } from "../../../signals";

export function useGameEmitters(
  socket: Socket,
  squaresStates: SquareState[],
  playerSign: SideSign,
  canPlay: boolean
) {
  useEffect(() => {
    const hasWon = isGameWin(squaresStates, playerSign);

    if (hasWon) {
      socket.emit(GAME.WIN, socket.id);
    }
  }, [canPlay]);
}
