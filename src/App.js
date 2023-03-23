import Header from "./components/Layout/Header";
import DecorSummary from "./components/DecorSummary/DecorSummary";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Team from "./Pages/Team";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./components/Layout/Footer";
import FreeShipping from "./components/FreeShipping/FreeShipping";

function App() {
  return (
    <div>
      <FreeShipping/>
      <Header />
      <Routes>
        <Route path="/" element={<DecorSummary />} />
        <Route path="/main" element={<Main />} />
        <Route path="/team" element={<Team/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
