import { Dispatch, SetStateAction } from "react";
import { login } from "./utils";
import { Form, Username, Password, Submit } from "../../styles";

interface Props {
  setPlayerName: Dispatch<SetStateAction<string>>;
}

export function SignupFormLogin({ setPlayerName }: Props) {
  return (
    <Form onSubmit={(e) => login(e, setPlayerName)}>
      <Username />
      <Password />
      <Submit>Login</Submit>
    </Form>
  );
}
