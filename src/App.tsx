import { useEffect, useState } from "react";
import {
  Tictactoe,
  Lobby,
  Signup,
  PlayerMenu,
  ChangePasswordForm,
  DeleteAccountForm,
} from "./components";
import { SideSign } from "@types";
import { fetchServer } from "./utils";
import { FlexBox } from "./styles";

export default function App() {
  const [playerName, setPlayerName] = useState("");
  const [playerSign, setPlayerSign] = useState<SideSign>();
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const isPlayerConnected = playerName !== "";

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
    const method = "POST";
    const credentials = "include" as RequestCredentials;
    const url = "http://localhost:3001/api/login/refresh";
    const options = { method, credentials };

    const reconnect = async () => {
      try {
        const data = await fetchServer(url, options);
        const { username } = data;
        console.log("reconnected");
        setPlayerName(username);
      } catch (err) {
        console.error(err);
      }
    };

    reconnect();
  }, []);

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
    <FlexBox direction="column" gap="2rem">
      {isPlayerConnected ? (
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
      ) : (
        <Signup setPlayerName={setPlayerName} />
      )}
    </FlexBox>
  );
}
