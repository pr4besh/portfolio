import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home />
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
