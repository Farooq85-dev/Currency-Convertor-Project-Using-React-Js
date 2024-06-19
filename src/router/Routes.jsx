import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { WelcomeComp, CurrencyConvertor } from "../exprts&imports";

function RouterCmp() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<WelcomeComp />} /> {/* Default route */}
        <Route path="/currencyConvertor" element={<CurrencyConvertor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterCmp;
