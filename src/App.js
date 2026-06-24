import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/context/LangContext";
import Portfolio from "@/pages/Portfolio";

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
