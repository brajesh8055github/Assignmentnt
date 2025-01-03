import './App.css'
import {Routes, Route } from "react-router-dom";
import AdminPage from "./Pages/AdminPage";
import DashboardPage from "./Pages/Dashboard";
import CalendarPage from "./Pages/CalendarPage";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
      </>
  );
};

export default App;
