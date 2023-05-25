import { Dispatch, SetStateAction } from "react";
import { SideSign } from "@types";
import { PlayerMenuLogoutButton as LogoutButton } from "./PlayerMenuLogoutButton";
import { PlayerMenuDelAccountButton as DelAccountButton } from "./PlayerMenuDelAccountButton";
import { PlayerMenuChangePasswordButton as ChangePasswordButton } from "./PlayerMenuChangePasswordButton";
import { FlexBox } from "../../styles";

interface Props {
  playerName: string;
  setPlayerName: Dispatch<SetStateAction<string>>;
  setPlayerSign: Dispatch<SetStateAction<SideSign | undefined>>;
  setIsChangingPassword: Dispatch<SetStateAction<boolean>>;
  setIsDeletingAccount: Dispatch<SetStateAction<boolean>>;
  isChangingPassword: boolean;
  isDeletingAccount: boolean;
  isManagingLobby: boolean;
  children?: React.ReactNode;
}

export function PlayerMenu({
  playerName,
  setPlayerName,
  setPlayerSign,
  setIsChangingPassword,
  setIsDeletingAccount,
  isChangingPassword,
  isDeletingAccount,
  isManagingLobby,
  children,
}: Props) {
  return (
    <FlexBox direction="column" gap="2rem">
      <label style={{ textAlign: "center" }}>{playerName}</label>
      {children}
      <FlexBox direction="column">
        {!isManagingLobby && (
          <button
            onClick={() => {
              setIsChangingPassword(false), setIsDeletingAccount(false);
            }}
          >
            Manage Lobby
          </button>
        )}
        {!isChangingPassword && (
          <ChangePasswordButton setIsChangingPassword={setIsChangingPassword} />
        )}
        {!isDeletingAccount && (
          <DelAccountButton setIsDeletingAccount={setIsDeletingAccount} />
        )}
        <LogoutButton
          setPlayerName={setPlayerName}
          setPlayerSign={setPlayerSign}
        />
      </FlexBox>
    </FlexBox>
  );
}
