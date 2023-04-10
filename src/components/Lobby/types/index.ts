export type LobbyAction = "create" | "join" | "leave";
export type LobbyActionProps = (
  action: LobbyAction,
  e?: React.FormEvent<HTMLFormElement>
) => void;
