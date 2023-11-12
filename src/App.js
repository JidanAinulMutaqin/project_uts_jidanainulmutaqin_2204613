import About from './components/About';
import Footer from './components/Footer';
import Header from './components/header';
import Home from './components/Home';
import Skills from './components/Skills';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import './App.css';
import { BrowserRouter as Router, Routes, Route} 
from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/portofolio" element={<Portofolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
