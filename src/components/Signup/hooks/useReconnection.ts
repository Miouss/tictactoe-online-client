import { Dispatch, SetStateAction, useEffect } from "react";
import { fetchServer } from "../../../utils";

export function useReconnection(
  setPlayerName: Dispatch<SetStateAction<string>>
) {
  useEffect(() => {
    const method = "POST";
    const endpoint = "login/refresh";
    const options = { method };

    const reconnect = async () => {
      try {
        const data = await fetchServer(endpoint, options);
        console.log("reconnected");
        setPlayerName(data.username);
      } catch (err) {
        console.error(err);
      }
    };

    reconnect();
  }, []);
}
