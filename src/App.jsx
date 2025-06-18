import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MainDashboard from "./components/pages/maindashboard";
import Repayments from "./components/pages/repayments";

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
            <Route path="/maindashboard" element={<MainDashboard />} />
            <Route path="/repayments" element={<Repayments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
