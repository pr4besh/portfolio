import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home />
      <Analytics />
    </Router>
  );
}

export default App;
