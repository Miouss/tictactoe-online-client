import { Dispatch, SetStateAction, useEffect } from "react";
import { fetchServer } from "../../../utils";

export function useReconnection(
  setPlayerName: Dispatch<SetStateAction<string>>
) {
  useEffect(() => {
    const method = "POST";
    const credentials = "include" as RequestCredentials;
    const url = "http://localhost:3001/api/login/refresh";
    const options = { method, credentials };

    const reconnect = async () => {
      try {
        const data = await fetchServer(url, options);
        const { username } = data;
        console.log("reconnected");
        setPlayerName(username);
      } catch (err) {
        console.error(err);
      }
    };

    reconnect();
  }, []);
}
