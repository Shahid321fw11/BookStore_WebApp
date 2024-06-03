import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/chats" element={<ChatPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
