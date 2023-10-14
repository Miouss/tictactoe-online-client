import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LobbyFormJoinLobby as FormJoinLobby } from "./LobbyFormJoinLobby";
import { LobbyActionButtonCreateLobby as ButtonCreateLobby } from "./LobbyActionButtonCreateLobby";
import { LobbyActionButtonLeaveLobby as ButtonLeaveLobby } from "./LobbyActionButtonLeaveLobby";
import { LobbyPlayersList as PlayersList } from "./LobbyPlayersList";
import { socket } from "../../main";
import { useLobbyListeners } from "./hooks";
import { Actions } from "./styles";
import { LobbyAction } from "./types";
import { Player, SideSign } from "@types";
import { FlexBox } from "../../styles";
import { LOBBY, PLAYER } from "../../signals";

interface Props {
  playerName: string;
  setPlayerSign: Dispatch<SetStateAction<SideSign | undefined>>;
  setHasGameStarted: Dispatch<SetStateAction<boolean>>;
}

export function Lobby({ playerName, setPlayerSign, setHasGameStarted }: Props) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [joinedLobbyId, setJoinedLobbyId] = useState("");
  const [lobbyTriggerAction, setLobbyTriggerAction] = useState<LobbyAction>();
  const [joiningLobbyId, setJoiningLobbyId] = useState("");

  const currentPlayer: Player = {
    name: playerName,
    id: socket.id,
  };

  const hasJoinedLobby = joinedLobbyId !== "";

  useLobbyListeners(
    socket,
    setPlayers,
    setJoinedLobbyId,
    setPlayerSign,
    setHasGameStarted
  );

  useEffect(() => {
    if (!lobbyTriggerAction) return;

    const createLobby = () => {
      socket.emit(LOBBY.CREATE, currentPlayer);
    };

    const joinLobby = (joiningLobbyId: string) => {
      socket.emit(LOBBY.JOIN, currentPlayer, joiningLobbyId);
    };

    const leaveLobby = () => {
      return new Promise((res) => {
        socket.emit(LOBBY.LEAVE, currentPlayer, joinedLobbyId);
        socket.on(PLAYER.LEFT, () => {
          setPlayers([]);
          setJoinedLobbyId("");
          setPlayerSign(undefined);
          setHasGameStarted(false);
          res(true);
        });
      });
    };

    const lobbyAction = async (
      action: LobbyAction,
      joiningLobbyId?: string
    ) => {
      const hasJoinedLobby = joinedLobbyId !== "";
      const isJoiningDifferentLobby =
        hasJoinedLobby && joiningLobbyId !== joinedLobbyId;

      const hasToLeaveLobby =
        (isJoiningDifferentLobby && action === "join") ||
        (hasJoinedLobby && action === "leave");

      if (hasToLeaveLobby) {
        await leaveLobby();
      }

      switch (action) {
        case "create":
          console.log("create lobby");
          createLobby();
          break;
        case "join":
          console.log("join lobby");
          joinLobby(joiningLobbyId!);
          break;
        case "leave":
          console.log("leave lobby");
          await leaveLobby();
          break;
      }
    };

    lobbyAction(lobbyTriggerAction, joiningLobbyId);
  }, [lobbyTriggerAction, joiningLobbyId]);

  useEffect(() => {
    socket.emit(LOBBY.LEAVE, currentPlayer);
    return () => {
      socket.emit(LOBBY.LEAVE, currentPlayer);
    };
  }, []);

  return (
    <FlexBox direction="column" gap="2rem">
      <PlayersList
        joinedLobbyId={joinedLobbyId}
        players={players}
        currentPlayer={currentPlayer}
      />
      <Actions>
        {hasJoinedLobby ? (
          <ButtonLeaveLobby setLobbyTriggerAction={setLobbyTriggerAction} />
        ) : (
          <ButtonCreateLobby setLobbyTriggerAction={setLobbyTriggerAction} />
        )}
        <FormJoinLobby
          setLobbyTriggerAction={setLobbyTriggerAction}
          setJoiningLobbyId={setJoiningLobbyId}
        />
      </Actions>
    </FlexBox>
  );
}
