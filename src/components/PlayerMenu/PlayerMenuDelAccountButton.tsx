import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsDeletingAccount: Dispatch<SetStateAction<boolean>>;
}

export function PlayerMenuDelAccountButton({ setIsDeletingAccount }: Props) {
  return (
    <button onClick={() => setIsDeletingAccount(true)}>Delete Account</button>
  );
}
