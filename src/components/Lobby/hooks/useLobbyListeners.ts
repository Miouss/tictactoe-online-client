import { Dispatch, SetStateAction, useEffect } from "react";
import { Player } from "@types";
import { Socket } from "socket.io-client";

export function useLobbyListeners(
  socket: Socket,
  setPlayers: Dispatch<SetStateAction<Player[]>>,
  setJoinedLobbyId: Dispatch<SetStateAction<string>>,
  setPlayerSign: Dispatch<SetStateAction<"X" | "O" | undefined>>,
  setHasGameStarted: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    socket.on("lobbyCreated", (player: Player, lobbyId: string) => {
      consoleLogEventTriggered("lobbyCreated");
      
      setPlayers([player]);
      setJoinedLobbyId(lobbyId);
      setPlayerSign("X");
    });

    socket.on("lobbyFull", () => {
      consoleLogEventTriggered("lobbyFull");
      alert("Lobby is full");
    });

    socket.on("lobbyAlreadyExists", () => {
      consoleLogEventTriggered("lobbyAlreadyExists");
      alert("Lobby already exists");
    });

    socket.on("LobbyNotFound", () => {
      consoleLogEventTriggered("LobbyNotFound");
      alert("Lobby not found");
    });

    socket.on("playerAlreadyJoined", () => {
      consoleLogEventTriggered("playerAlreadyJoined");
      alert("You already joined");
    });

    socket.on("playerNameTaken", () => {
      consoleLogEventTriggered("playerNameTaken");
      alert("Player name taken");
    });

    socket.on("opponentLeft", (remainingPlayer: Player) => {
      consoleLogEventTriggered("opponentLeft");
      setPlayers([remainingPlayer]);
      setPlayerSign("X");
      setHasGameStarted(false);
      alert("The opponent left the lobby");
    });

    socket.on("playerJoined", (playersInLobby: Player[], lobbyId: string) => {
      consoleLogEventTriggered("playerJoined");
      
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