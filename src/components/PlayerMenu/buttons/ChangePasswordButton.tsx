import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsChangingPassword: Dispatch<SetStateAction<boolean>>;
}

export function ChangePasswordButton({ setIsChangingPassword }: Props) {
  return <button onClick={() => setIsChangingPassword(true)}>Change Password</button>;
}
