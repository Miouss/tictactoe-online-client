import { Dispatch, SetStateAction } from "react";
import { Form, Password, Submit } from "../../styles";
import { SideSign } from "@types";
import { deleteAccount } from "./utils";

interface Props {
  playerName: string;
  setPlayerName: Dispatch<SetStateAction<string>>;
  setPlayerSign: Dispatch<SetStateAction<SideSign | undefined>>;
}

export function DeleteAccountForm({
  playerName,
  setPlayerName,
  setPlayerSign,
}: Props) {
  return (
    <Form
      onSubmit={(event) =>
        deleteAccount(event, playerName, setPlayerName, setPlayerSign)
      }
    >
      <Password />
      <Submit>Delete !</Submit>
    </Form>
  );
}
