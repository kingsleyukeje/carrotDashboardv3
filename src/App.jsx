import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./components/pages/MainDashboard";
import Repayments from "./components/pages/Repayments";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />

        {/* This is where page content will change */}
        <div style={{ flex: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/MainDashboard" element={<MainDashboard />} />
            <Route path="/Repayments" element={<Repayments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
