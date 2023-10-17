export enum LobbyAction {
  CREATE = "create",
  JOIN = "join",
  LEAVE = "leave",
}
export type LobbyActionProps = (
  action: LobbyAction,
  e?: React.FormEvent<HTMLFormElement>
) => void;
