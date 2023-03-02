import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../src/pages/Home";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
