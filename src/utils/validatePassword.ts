import { MutableRefObject } from "react";

export function validatePassword(
  passwordRef: MutableRefObject<HTMLInputElement | null>,
  passwordConfirmRef: MutableRefObject<HTMLInputElement | null>
) {
  if (!passwordRef.current || !passwordConfirmRef.current) return;
  
  const hasSamePasswords =
    passwordRef.current?.value === passwordConfirmRef.current?.value;

  if (hasSamePasswords) {
    passwordConfirmRef.current?.setCustomValidity("");
  } else {
    passwordConfirmRef.current?.setCustomValidity("Passwords do not match");
  }
}
