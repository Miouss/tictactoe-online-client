import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  setIsChangingPassword: Dispatch<SetStateAction<boolean>>;
  setIsDeletingAccount: Dispatch<SetStateAction<boolean>>;
}

export function ManageLobbyButton({
  setIsChangingPassword,
  setIsDeletingAccount,
}: Props) {
  const resetMenu = () => {
    setIsChangingPassword(false);
    setIsDeletingAccount(false);
  };

  return <button onClick={resetMenu}>Manage Lobby</button>;
}
