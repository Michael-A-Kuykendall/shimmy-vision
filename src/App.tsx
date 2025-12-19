import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Router basename="/shimmy-vision">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/checkout/:tier" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
