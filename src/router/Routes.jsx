import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { WelcomeComp } from "../exprts&imports";

function RouterCmp() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<WelcomeComp />} /> {/* Default route */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouterCmp;
