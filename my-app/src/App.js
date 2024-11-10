import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages";
import Test from "./pages/test";
import GachaButton from "./components/button"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
