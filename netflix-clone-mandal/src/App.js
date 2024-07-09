import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

function App() {
  let user = null;

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route 
            path="/" 
            element={user ? <HomeScreen /> : <Navigate to="/login" />} 
          />
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;