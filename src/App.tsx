import { useEffect, useState } from "react";
import { Signup, MainMenu } from "./components";
import { FlexBox } from "./styles";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  redirect,
  useNavigate,
} from "react-router-dom";

export default function App() {
  const [playerName, setPlayerName] = useState("");

  const isPlayerConnected = playerName !== "";

  const navigate = useNavigate();

  useEffect(() => {
    isPlayerConnected ? navigate("/lobby") : navigate("/signup");
  }, [isPlayerConnected]);

  return (
    <FlexBox direction="column" gap="2rem">
      <Routes>
        <Route
          path="/lobby"
          element={
            <MainMenu playerName={playerName} setPlayerName={setPlayerName} />
          }
        />
        <Route
          path="/signup"
          element={<Signup setPlayerName={setPlayerName} />}
        />
      </Routes>
    </FlexBox>
  );
}
