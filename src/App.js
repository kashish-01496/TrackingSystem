import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AttendancePage from "./components/attendance";


const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div style={{padding: "5px", width: "100%" }}>
          <Routes>
            <Route path="/attendance" element={<AttendancePage />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

