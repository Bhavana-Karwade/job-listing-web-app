import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import JobDetail from './pages/JobDetail';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-[#0e0c1e] text-white font-sans">
      <nav className="flex justify-around py-4 bg-[#1b1734] shadow-md text-sm sticky top-0 z-50">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/messages" className="hover:underline">Messages</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
