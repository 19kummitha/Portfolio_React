import { BrowserRouter as Router, } from "react-router-dom";
import Header from "../src/Components/Header.jsx";
import PRoutes from "./PRoutes.jsx";
const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <PRoutes/>
      </div>
    </Router>
  );
};

export default App;
