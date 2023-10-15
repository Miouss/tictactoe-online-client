import { Dispatch, SetStateAction, useState } from "react";
import { SignupFormLogin as FormLogin } from "./SignupFormLogin";
import { SignupFormCreateAccount as FormCreateAccount } from "./SignupFormCreateAccount";
import { ConditionnalSubMenu } from "./styles";
import { useReconnection } from "./hooks";
import { SubMenu } from "./types";
import { FlexBox } from "../../styles";
import { ActionsButtons } from "./SignupActionsButtons";

interface Props {
  setPlayerName: Dispatch<SetStateAction<string>>;
}

export function Signup({ setPlayerName }: Props) {
  const [openSubmenu, setOpenSubmenu] = useState<SubMenu>();

  const isSubMenuOpen = openSubmenu !== undefined;
  const isCreatingAccount = openSubmenu === "createAccount";

  useReconnection(setPlayerName);

  const displayType = isSubMenuOpen ? "block" : "none";

  return (
    <FlexBox direction="column" gap="2rem">
      <ActionsButtons setOpenSubmenu={setOpenSubmenu} />
      <ConditionnalSubMenu displayType={displayType}>
        {isCreatingAccount ? (
          <FormCreateAccount />
        ) : (
          <FormLogin setPlayerName={setPlayerName} />
        )}
      </ConditionnalSubMenu>
    </FlexBox>
  );
}
