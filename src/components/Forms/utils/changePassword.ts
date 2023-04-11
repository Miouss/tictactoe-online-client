import { getPasswords } from "./";
import { fetchServer } from "../../../utils";

export async function changePassword(
  event: React.FormEvent<HTMLFormElement>,
  playerName: string,
  setIsChangingPassword: React.Dispatch<React.SetStateAction<boolean>>
) {
  event.preventDefault();

  const username = playerName;
  const { password, newPassword } = getPasswords(event);
  const method = "PATCH";
  const headers = { "Content-Type": "application/json" };
  const credentials = "include" as RequestCredentials;
  const body = JSON.stringify({ username, password, newPassword });
  const url = "http://localhost:3001/api/account/password";
  const options = { method, headers, body, credentials };

  try {
    const data = await fetchServer(url, options);
    alert(data.message);
    setIsChangingPassword(false);
  } catch (err: any) {
    alert(err.message);
  }
}
