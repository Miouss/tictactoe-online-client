import { useState } from "react";
import { Signup, MainMenu } from "./components";
import { FlexBox } from "./styles";

export default function App() {
  const [playerName, setPlayerName] = useState("");

  const isPlayerConnected = playerName !== "";

  const Menu = () => {
    return isPlayerConnected ? (
      <MainMenu playerName={playerName} setPlayerName={setPlayerName} />
    ) : (
      <Signup setPlayerName={setPlayerName} />
    );
  };

  return (
    <FlexBox direction="column" gap="2rem">
      <Menu />
    </FlexBox>
  );
}
