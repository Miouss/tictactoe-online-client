import { Dispatch, SetStateAction, useState } from "react";
import { SignupActionButton as Button } from "./SignupActionButton";
import { SignupLogin as FormLogin } from "./SignupLogin";
import { SignupCreateAccount as FormCreateAccount } from "./SignupCreateAccount";
import { Actions, ConditionnalSubMenu } from "./styles";
import { useReconnection } from "./hooks";
import { SubMenu } from "./types";
import { FlexBox } from "../../styles";

interface Props {
  setPlayerName: Dispatch<SetStateAction<string>>;
}

export function Signup({ setPlayerName }: Props) {
  const [openSubmenu, setOpenSubmenu] = useState<SubMenu>();

  const isSubMenuOpen = openSubmenu !== undefined;
  const isCreatingAccount = openSubmenu === "createAccount";

  const createActionButton = (label: string, submenuName: SubMenu) => ({
    label,
    submenuName,
  });

  const actionsButtonsList = [
    createActionButton("Create New Account", "createAccount"),
    createActionButton("Connect with account", "login"),
  ];

  const ActionsButtons = () => (
    <>
      {actionsButtonsList.map((button, i) => (
        <Button
          key={i}
          label={button.label}
          submenuName={button.submenuName}
          setOpenSubmenu={setOpenSubmenu}
        />
      ))}
    </>
  );

  useReconnection(setPlayerName);

  return (
    <FlexBox direction="column" gap="2rem">
      <Actions>
        <ActionsButtons />
      </Actions>
      <ConditionnalSubMenu displayed={isSubMenuOpen}>
        {isCreatingAccount ? (
          <FormCreateAccount />
        ) : (
          <FormLogin setPlayerName={setPlayerName} />
        )}
      </ConditionnalSubMenu>
    </FlexBox>
  );
}
