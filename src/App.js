import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import Article from './pages/Article';
import Event from './pages/Event';
import Trashscan from './pages/Trashscan';
import Chatbot from './pages/Chatbot';

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-5 bg-gray-50">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/article" element={<Article />} />
            <Route path="/event" element={<Event />} />
            <Route path="/Trashscan" element={<Trashscan />} />
            <Route path="/Chatbot" element={<Chatbot />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
