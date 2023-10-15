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
  const body = JSON.stringify({ username, password, newPassword });
  const endpoint = "account/password";
  const options = { method, body };

  try {
    const data = await fetchServer(endpoint, options);
    alert(data.message);
    setIsChangingPassword(false);
  } catch (err: any) {
    alert(err.message);
  }
}
