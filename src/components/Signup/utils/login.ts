import { Dispatch, SetStateAction } from "react";
import { getCredentials } from "./";
import { fetchServer } from "../../../utils";

export async function login(
  e: React.FormEvent<HTMLFormElement>,
  setPlayerName: Dispatch<SetStateAction<string>>
) {
  e.preventDefault();

  const method = "POST";
  const headers = { "Content-Type": "application/json" };
  const credentials = "include" as RequestCredentials;

  const { username, password } = getCredentials(e);

  const body = JSON.stringify({
    username,
    password,
  });

  const endpoint = "login";
  const options = { method, headers, body, credentials };

  try {
    await fetchServer(endpoint, options);

    setPlayerName(username);
  } catch (error: any) {
    alert(`Error ${error.status}: ${error.message}`);
  }
}
