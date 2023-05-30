import { Dispatch, SetStateAction, useCallback } from "react";
import {
  ChangePasswordButton,
  DeleteAccountButton,
  ManageLobbyButton,
} from "../buttons";

export function useManageLobbyBtn(
  isManagingLobby: boolean,
  setIsChangingPassword: Dispatch<SetStateAction<boolean>>,
  setIsDeletingAccount: Dispatch<SetStateAction<boolean>>
) {
  return useCallback(
    () =>
      isManagingLobby ? null : (
        <ManageLobbyButton
          setIsChangingPassword={setIsChangingPassword}
          setIsDeletingAccount={setIsDeletingAccount}
        />
      ),
    [isManagingLobby]
  );
}

export function useChangePasswordBtn(
  isChangingPassword: boolean,
  setIsChangingPassword: Dispatch<SetStateAction<boolean>>
) {
  return useCallback(
    () =>
      isChangingPassword ? null : (
        <ChangePasswordButton setIsChangingPassword={setIsChangingPassword} />
      ),
    [isChangingPassword]
  );
}

export function useDeleteAccountBtn(
  isDeletingAccount: boolean,
  setIsDeletingAccount: Dispatch<SetStateAction<boolean>>
) {
  return useCallback(
    () =>
      isDeletingAccount ? null : (
        <DeleteAccountButton setIsDeletingAccount={setIsDeletingAccount} />
      ),
    [isDeletingAccount]
  );
}
