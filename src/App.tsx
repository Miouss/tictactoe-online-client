import { useEffect, useState } from "react";
import { Signup, MainMenu } from "./components";
import { FlexBox } from "./styles";
import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { SERVER_URL } from "./config";
import { fetchServer } from "./utils";

export default function App() {
  const [playerName, setPlayerName] = useState("");
  const [searchParams] = useSearchParams();

  const isPlayerConnected = playerName !== "";

  const navigate = useNavigate();

  useEffect(() => {
    isPlayerConnected ? navigate("/lobby") : navigate("/signup");
  }, [isPlayerConnected]);

  useEffect(() => {
    if (searchParams.has("token")) {
      const token = searchParams.get("token");
      const method = "PUT";
      const headers = { "Content-Type": "application/json" };
      const url = `${SERVER_URL}/api/account?token=${token}`;
      const options = { method, headers };

      const handleFetch = async () => {
        try {
          const data = await fetchServer(url, options);
          alert(data.message);
        } catch (err: any) {
          alert(err.message);
        }
      };

      handleFetch();
    }
  }, [searchParams]);

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
