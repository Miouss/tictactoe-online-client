import { Dispatch, SetStateAction } from "react";
import { fetchServer } from "../../utils";

interface Props {
  setIsChangingPassword: Dispatch<SetStateAction<boolean>>;
}

export function PlayerMenuChangePasswordButton({ setIsChangingPassword }: Props) {
  return <button onClick={() => setIsChangingPassword(true)}>Change Password</button>;
}
