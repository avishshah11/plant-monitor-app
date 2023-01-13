import Header from "./components/Layout/Header";
import DecorSummary from "./components/DecorSummary/DecorSummary";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Team from "./Pages/Team";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DecorSummary />} />
        <Route path="/main" element={<Main />} />
        <Route path="/team" element={<Team/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
