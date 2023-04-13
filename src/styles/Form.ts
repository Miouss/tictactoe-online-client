import styled from "@emotion/styled";
import { flexColumn } from "./shorthands";

export const Form = styled("form")({
  ...flexColumn,
  gap: "1rem",
  textAlign: "center",
});

Form.defaultProps = {
  method: "POST"
};

export const Username = styled("input")({});

Username.defaultProps = {
  type: "text",
  name: "username",
  placeholder: "Enter your username",
  required: true,
};

export const Password = styled("input")({});

Password.defaultProps = {
  type: "password",
  name: "password",
  placeholder: "Enter your password",
  required: true,
};

export const PasswordConfirm = styled("input")({});

PasswordConfirm.defaultProps = {
  type: "password",
  placeholder: "Confirm your password",
  required: true,
};

export const Email = styled("input")({});

Email.defaultProps = {
  type: "email",
  name: "email",
  placeholder: "Enter your email",
  required: true,
};

export const Submit = styled("button")({});

Submit.defaultProps = {
  type: "submit",
};
