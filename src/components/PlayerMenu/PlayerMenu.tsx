import { Dispatch, SetStateAction, useCallback } from "react";
import { SideSign } from "@types";
import {
  ChangePasswordButton,
  DeleteAccountButton,
  LogoutButton,
  ManageLobbyButton,
} from "./buttons";
import { FlexBox } from "../../styles";
import {
  useChangePasswordBtn,
  useDeleteAccountBtn,
  useManageLobbyBtn,
} from "./hooks";

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
  const ManageLobbyBtn = useManageLobbyBtn(
    isManagingLobby,
    setIsChangingPassword,
    setIsDeletingAccount
  );

  const ChangePasswordBtn = useChangePasswordBtn(
    isChangingPassword,
    setIsChangingPassword
  );

  const DeleteAccountBtn = useDeleteAccountBtn(
    isDeletingAccount,
    setIsDeletingAccount
  );

  return (
    <FlexBox direction="column" gap="2rem">
      <label style={{ textAlign: "center" }}>{playerName}</label>
      {children}
      <FlexBox direction="column">
        <ManageLobbyBtn />
        <ChangePasswordBtn />
        <DeleteAccountBtn />
        <LogoutButton
          setPlayerName={setPlayerName}
          setPlayerSign={setPlayerSign}
        />
      </FlexBox>
    </FlexBox>
  );
}
