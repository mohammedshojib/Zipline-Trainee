import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notfound from "./components/Notfound";
import RequireAuth from "./components/RequireAuth";
import Checkout from "./components/Checkout";
import Myprofile from "./components/Myprofile";
import Footer from "./components/Footer";
import About from "./components/About";
import QandA from "./components/QandA";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<Myprofile />} />
        <Route path="/q&a" element={<QandA />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Notfound />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
