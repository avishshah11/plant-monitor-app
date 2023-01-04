import Header from "./components/Layout/Header";
import DecorSummary from "./components/DecorSummary/DecorSummary";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Team from "./Pages/Team";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DecorSummary />} />
        <Route path="/main" element={<Main />} />
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </div>
  );
}

export default App;
