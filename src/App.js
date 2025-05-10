import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import AboutPage from './components/AboutPage';
import CategoryDetails from './components/CategoryDetails';
import Questionnaire from './components/Questionnaire';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="container flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage setSelectedCategory={setSelectedCategory} />} />
            <Route path="/categories/:category" element={<CategoryDetails />} />
            <Route path="/questions/:category" element={<Questionnaire />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer ></Footer>
      </div>
      {selectedCategory}
    </Router>
  );
}

export default App;
