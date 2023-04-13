import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Lobby,
  ChangePasswordForm,
  DeleteAccountForm,
  Tictactoe,
  PlayerMenu,
} from "../";
import { SideSign } from "@types";

interface Props {
  playerName: string;
  setPlayerName: Dispatch<SetStateAction<string>>;
}

export function MainMenu({ playerName, setPlayerName }: Props) {
  const [playerSign, setPlayerSign] = useState<SideSign>();
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const DynamicMenu = () => {
    if (isDeletingAccount) {
      return (
        <DeleteAccountForm
          playerName={playerName}
          setPlayerName={setPlayerName}
          setPlayerSign={setPlayerSign}
        />
      );
    }

    if (isChangingPassword) {
      return (
        <ChangePasswordForm
          playerName={playerName}
          setIsChangingPassword={setIsChangingPassword}
        />
      );
    }
    return (
      <Lobby
        playerName={playerName}
        setPlayerSign={setPlayerSign}
        setHasGameStarted={setHasGameStarted}
      />
    );
  };

  useEffect(() => {
    if (isDeletingAccount) {
      setIsChangingPassword(false);
    }
  }, [isDeletingAccount]);

  useEffect(() => {
    if (isChangingPassword) {
      setIsDeletingAccount(false);
    }
  }, [isChangingPassword]);

  return (
    <>
      {hasGameStarted && <Tictactoe playerSign={playerSign} />}
      <PlayerMenu
        playerName={playerName}
        setPlayerName={setPlayerName}
        setPlayerSign={setPlayerSign}
        setIsChangingPassword={setIsChangingPassword}
        setIsDeletingAccount={setIsDeletingAccount}
      >
        <DynamicMenu />
      </PlayerMenu>
    </>
  );
}
