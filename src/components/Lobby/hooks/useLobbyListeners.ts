import { Dispatch, SetStateAction, useEffect } from "react";
import { Player } from "@types";
import { Socket } from "socket.io-client";

import { LOBBY, PLAYER } from "../../../signals";

export function useLobbyListeners(
  socket: Socket,
  setPlayers: Dispatch<SetStateAction<Player[]>>,
  setJoinedLobbyId: Dispatch<SetStateAction<string>>,
  setPlayerSign: Dispatch<SetStateAction<"X" | "O" | undefined>>,
  setHasGameStarted: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    socket.on(LOBBY.CREATED, (player: Player, lobbyId: string) => {
      consoleLogEventTriggered(LOBBY.CREATED);

      setPlayers([player]);
      setJoinedLobbyId(lobbyId);
      setPlayerSign("X");
    });

    socket.on(LOBBY.FULL, () => {
      consoleLogEventTriggered(LOBBY.FULL);
      alert("Lobby is full");
    });

    socket.on(LOBBY.EXISTS, () => {
      consoleLogEventTriggered(LOBBY.EXISTS);
      alert("Lobby already exists");
    });

    socket.on(LOBBY.NOT_FOUND, () => {
      consoleLogEventTriggered(LOBBY.NOT_FOUND);
      alert("Lobby not found");
    });

    socket.on(PLAYER.ALREADY_JOINED, () => {
      consoleLogEventTriggered(PLAYER.ALREADY_JOINED);
      alert("You already joined");
    });

    socket.on(PLAYER.NAME_TAKEN, () => {
      consoleLogEventTriggered(PLAYER.NAME_TAKEN);
      alert("Player name taken");
    });

    socket.on(PLAYER.OPPONENT_LEFT, (remainingPlayer: Player) => {
      consoleLogEventTriggered(PLAYER.OPPONENT_LEFT);
      setPlayers([remainingPlayer]);
      setPlayerSign("X");
      setHasGameStarted(false);
      alert("The opponent left the lobby");
    });

    socket.on(PLAYER.JOINED, (playersInLobby: Player[], lobbyId: string) => {
      consoleLogEventTriggered(PLAYER.JOINED);

      setPlayers(playersInLobby);
      setJoinedLobbyId(lobbyId);
      setPlayerSign((sign) => (sign === "X" ? sign : "O"));
      setHasGameStarted(true);
    });
  }, []);
}

function consoleLogEventTriggered(event: string) {
  console.log(`${event} event triggered`);
}
