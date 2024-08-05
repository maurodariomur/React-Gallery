import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AnotherPage from './pages/AnotherPage';
import Gallery from './pages/Gallery';
import Music  from './pages/Music';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/another-page" element={<AnotherPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/musics" element={<Music />} />
    </Routes>
  );
};

export default App;
