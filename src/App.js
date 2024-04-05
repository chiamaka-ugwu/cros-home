import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
