import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Equipe from './components/Equipe';
import Login from './components/Login';
import Vistoria from './components/Vistoria';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vistoria" element={<Vistoria />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
