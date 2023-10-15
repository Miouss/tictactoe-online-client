import { SideSign } from "@types";
import { Dispatch, SetStateAction } from "react";
import { fetchServer } from "../../../utils";

export async function deleteAccount(
  event: React.FormEvent<HTMLFormElement>,
  playerName: string,
  setPlayerName: Dispatch<SetStateAction<string>>,
  setPlayerSign: Dispatch<SetStateAction<SideSign | undefined>>
) {
  event.preventDefault();

  const username = playerName;
  const password = event.currentTarget.password.value;

  const method = "DELETE";
  const body = JSON.stringify({ username, password });
  const endpoint = "account";
  const options = { method, body };

  try {
    const data = await fetchServer(endpoint, options);
    setPlayerName("");
    setPlayerSign(undefined);
    alert(data.message);
  } catch (err: any) {
    alert(err.message);
  }
}
