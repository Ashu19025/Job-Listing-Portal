import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Register from './pages/Register';
import EmployerDashboard from './pages/EmployerDashboard';
import CandidateDashboard from './pages/CandidateDashboard';
import JobDetails from './pages/JobDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="employers" element={<EmployerDashboard />} />
          <Route path="dashboard-employer" element={<EmployerDashboard />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
