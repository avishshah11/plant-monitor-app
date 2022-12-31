import Header from "./components/Layout/Header";
import DecorSummary from "./components/DecorSummary/DecorSummary";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DecorSummary />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
