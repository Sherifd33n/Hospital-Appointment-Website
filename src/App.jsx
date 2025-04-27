import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/doctors" element={<Doctors />} />
      </Routes>{" "}
      <Routes>
        <Route path="/doctors/:specialty" element={<Doctors />} />
      </Routes>{" "}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>{" "}
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>{" "}
      <Routes>
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
      <Routes>
        <Route path="/my-appointment" element={<MyAppointment />} />
      </Routes>
      <Routes>
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
