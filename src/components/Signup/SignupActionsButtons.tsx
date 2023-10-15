import { Dispatch } from "react";
import { SubMenu } from "./types";
import { SignupActionButton as Button } from "./SignupActionButton";
import { Actions } from "./styles";

interface Props {
  setOpenSubmenu: Dispatch<SubMenu | undefined>;
}

export function ActionsButtons({ setOpenSubmenu }: Props) {
  return (
    <Actions>
      <Button
        setOpenSubmenu={setOpenSubmenu}
        label="Create New Account"
        submenuName="createAccount"
      />
      <Button
        setOpenSubmenu={setOpenSubmenu}
        label="Connect with account"
        submenuName="login"
      />
    </Actions>
  );
}
