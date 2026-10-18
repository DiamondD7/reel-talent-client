import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./assets/js/ProtectedRoute.jsx";
import Signinpage from "./views/Signinpage";
import Signuppage from "./views/Signuppage";
import Homepage from "./views/Homepage";

import "./App.css";
function App() {
  return (
    <div className="app-container__wrapper">
      <>
        <Routes>
          <Route index path="/signin" element={<Signinpage />} />
          <Route
            path="/home/*"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route index path="/signup" element={<Signuppage />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
