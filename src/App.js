import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Academy from './pages/Academy';
import SocialMedia from './pages/SocialMedia';
import Merch from './pages/Merch';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Navigate to={'/'} replace />} />
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Academy />} />
          <Route path="/social" element={<SocialMedia />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
