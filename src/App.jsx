import { createContext, useEffect, useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notfound from "./components/Notfound";
import RequireAuth from "./components/RequireAuth";
import Hello from "./components/Hello";
import Myprofile from "./components/Myprofile";

export const ReviewsContext = createContext();

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<Myprofile />} />
        <Route path="/*" element={<Notfound />} />
        <Route
          path="/hello"
          element={
            <RequireAuth>
              <Hello />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
