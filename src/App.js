import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SingIn";
import ProtectedRoute from "./protectedRoute.js/protectedRoute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/NovaLab" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
