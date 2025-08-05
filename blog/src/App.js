import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
