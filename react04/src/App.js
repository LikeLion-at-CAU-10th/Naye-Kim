import logo from './logo.svg';
import './App.css';
import { Routes, Route } from  'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import About from './pages/About';
import Love from './pages/Love';
import styled from 'styled-components';
import AboutWhom from './components/AboutWhom';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path=":nickname" element={<AboutWhom />}></Route>
          </Route>
          <Route path="/love" element={<Love />} />
        </Routes>
    </>
  );
}

export default App;
