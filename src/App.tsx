import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login";
import Chat from "./pages/chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
