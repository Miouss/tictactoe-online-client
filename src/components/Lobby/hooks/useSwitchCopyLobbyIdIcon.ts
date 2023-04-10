import { Dispatch, SetStateAction, useEffect } from "react";

export function useSwitchCopyLobbyIdIcon(
  hasCopiedLobbyId: boolean,
  setHasCopiedLobbyId: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    if (hasCopiedLobbyId) {
      const timeout = setTimeout(() => {
        setHasCopiedLobbyId(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasCopiedLobbyId]);
}
