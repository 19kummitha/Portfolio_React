import { BrowserRouter as Router } from "react-router-dom";
import PRoutes from "./PRoutes.jsx";
import Header from "./Components/header.jsx";
const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <PRoutes />
      </div>
    </Router>
  );
};

export default App;
