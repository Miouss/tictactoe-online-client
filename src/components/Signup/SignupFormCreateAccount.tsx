import { useRef } from "react";
import { createAccount } from "./utils";
import { validatePassword } from "../../utils";
import {
  Form,
  Username,
  Password,
  PasswordConfirm,
  Email,
  Submit,
} from "../../styles";

export function SignupFormCreateAccount() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  return (
    <Form onSubmit={createAccount}>
      <Username />
      <Password ref={passwordRef} />
      <PasswordConfirm
        ref={passwordConfirmRef}
        onChange={() => validatePassword(passwordRef, passwordConfirmRef)}
      />
      <Email />
      <Submit> Create Account </Submit>
    </Form>
  );
}
