export async function fetchServer(endpoint: string, options: RequestInit) {
  const headers = { "Content-Type": "application/json" };
  const credentials = "include" as RequestCredentials;
  options = { ...options, credentials, headers };

  const response = await fetch(
    `http://localhost:3001/api/${endpoint}`,
    options
  );

  const data = await response.json();

  if (!response.ok) throw { status: response.status, message: data.message };

  return data;
}
