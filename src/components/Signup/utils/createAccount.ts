import { getCredentials } from "./";
import { fetchServer } from "../../../utils";

export async function createAccount(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const method = "POST";

  const { username, password, email } = getCredentials(event);

  const body = JSON.stringify({
    username,
    password,
    email,
  });

  const endpoint = "account";
  const options = { method, body };

  try {
    await fetchServer(endpoint, options);
    alert(`Account created for ${username} !`);
  } catch (error: any) {
    alert(`Error ${error.status}: ${error.message}`);
  }
}
