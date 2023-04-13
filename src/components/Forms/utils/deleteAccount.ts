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
  const headers = { "Content-Type": "application/json" };
  const credentials = "include" as RequestCredentials;
  const body = JSON.stringify({ username, password });
  const url = "http://localhost:3001/api/account";
  const options = { method, headers, body, credentials };

  try {
    const data = await fetchServer(url, options);
    setPlayerName("");
    setPlayerSign(undefined);
    alert(data.message);
  } catch (err: any) {
    alert(err.message);
  }
}
