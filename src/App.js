import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
