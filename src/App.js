import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';


function App() {
  return (
   <BrowserRouter>
   <Home />
    <div>
      <Routes>
        <Route path="/" exact />
        <Route path="/signin" element={<Home />} exact />
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;


