import { useEffect, useState } from "react";
import { socket } from "../../main";
import { TictactoeBoardSquare as Square } from "./TictactoeBoardSquare";
import { createBoard, replayGame } from "./utils";
import { useGameListeners, useGameEmitters, useResetSquares } from "./hooks";
import { Board, GameStatus } from "./styles";
import { GameIssue, ResetBoard } from "./types";
import { SideSign } from "@types";
import { FlexBox } from "../../styles";
import { GAME } from "../../signals";

interface Props {
  playerSign: SideSign | undefined;
}

export function Tictactoe({ playerSign }: Props) {
  const isGameOwner = playerSign === "X";
  const [canPlay, setCanPlay] = useState(isGameOwner);
  const [gameIssue, setGameIssue] = useState<GameIssue>("running");
  const [squaresStates, setSquaresStates] = useState(Array(9).fill(null));
  const [resetBoard, setResetBoard] = useState<ResetBoard>("pending");

  const opponentSign = playerSign === "X" ? "O" : "X";
  const isGameRunning = gameIssue === "running";

  const handleReplayButtonClick = () => {
    replayGame(socket, setSquaresStates, setGameIssue, setResetBoard);
  };

  const handleBoardCreation = () =>
    resetBoard === "pending" && createBoard(playerSign, Square);
  
  useResetSquares(resetBoard, setResetBoard);

  useGameListeners(
    socket,
    playerSign,
    opponentSign,
    setCanPlay,
    setSquaresStates,
    setGameIssue,
    setResetBoard
  );

  useGameEmitters(socket, squaresStates, playerSign, canPlay);

  useEffect(() => {
    return () => {
      socket.removeAllListeners(GAME.MAKE_MOVE);
      socket.removeAllListeners(GAME.WIN);
      socket.removeAllListeners(GAME.DRAW);
      socket.removeAllListeners(GAME.REPLAY);
      socket.removeAllListeners(GAME.MOVE_MADE);
      socket.removeAllListeners(GAME.OVER);
    }
  }, []);

  return (
    <>
      <GameStatus hidden={isGameRunning}>
        <h3>{`${gameIssue.toLocaleUpperCase()}!`}</h3>
        {isGameOwner && (
          <button onClick={handleReplayButtonClick}>Replay ?</button>
        )}
      </GameStatus>

      <FlexBox justify="center" align="center">
        <Board playing={canPlay && isGameRunning}>
          {handleBoardCreation()}
        </Board>
      </FlexBox>
    </>
  );
}
