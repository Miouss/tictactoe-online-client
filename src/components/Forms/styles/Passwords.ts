import styled from "@emotion/styled";
import { Password } from "../../../styles";

export const OldPassword = styled(Password)();
OldPassword.defaultProps = {
  name: "oldPassword",
  placeholder: "Enter your old password",
  required: true,
};

export const NewPassword = styled(Password)();
NewPassword.defaultProps = {
  name: "password",
  placeholder: "Enter your new password",
  required: true,
};

export const NewPasswordConfirm = styled(Password)();
NewPasswordConfirm.defaultProps = {
  placeholder: "Confirm your new password",
  required: true,
};
