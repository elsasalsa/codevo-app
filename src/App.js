import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from './Header';
import Home from './Company/Home';
import Service from './Company/Service';
import Product from './Company/Product';
import About from './Company/About';
import Contact from './Company/Contact';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/services" element={<Service />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
