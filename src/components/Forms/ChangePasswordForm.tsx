import { useRef } from "react";
import { changePassword } from "./utils";
import { OldPassword, NewPassword, NewPasswordConfirm } from "./styles";
import { Form, Submit } from "../../styles";
import { validatePassword } from "../../utils";

interface Props {
  playerName: string;
  setIsChangingPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ChangePasswordForm({
  playerName,
  setIsChangingPassword,
}: Props) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  return (
    <Form
      style={{ minWidth: "200px" }}
      onSubmit={(event) =>
        changePassword(event, playerName, setIsChangingPassword)
      }
    >
      <OldPassword />
      <NewPassword ref={passwordRef} />
      <NewPasswordConfirm
        ref={passwordConfirmRef}
        onChange={() => validatePassword(passwordRef, passwordConfirmRef)}
      />
      <Submit>Change !</Submit>
    </Form>
  );
}
