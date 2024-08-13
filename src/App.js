import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Function to handle login
  const login = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  // useEffect to handle navigation based on login status
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Navigate to Home when logged in
    } else {
      navigate("/login"); // Navigate to Login when logged out
    }
  }, [isLoggedIn]);

  return (
    <div className="app">
      {/* Conditional rendering based on login status */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      <Outlet context={login} />
    </div>
  );
}

export default App;