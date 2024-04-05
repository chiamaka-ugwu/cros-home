import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signin" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
