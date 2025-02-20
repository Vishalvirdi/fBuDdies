import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./compnents/HomePage";
import ThanksPage from "./compnents/ThanksPage";

export const BASE_URL = import.meta.env.MODE === "development" ? "https://bbuddies.vercel.app" : "/api";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ThanksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
