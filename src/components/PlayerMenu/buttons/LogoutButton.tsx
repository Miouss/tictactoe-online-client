import { SideSign } from "@types";
import { Dispatch, SetStateAction } from "react";
import { fetchServer } from "../../../utils";

interface Props {
  setPlayerName: Dispatch<SetStateAction<string>>;
  setPlayerSign: Dispatch<SetStateAction<SideSign | undefined>>;
}

export function LogoutButton({ setPlayerName, setPlayerSign }: Props) {
  const logout = async () => {
    const method = "DELETE";
    const endpoint = "login";
    const options = { method };

    try {
      await fetchServer(endpoint, options);
      setPlayerName("");
      setPlayerSign(undefined);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={logout}>Disconnect</button>;
}
