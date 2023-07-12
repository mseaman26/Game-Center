import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import SignUp from './pages/SignUp.js'
import Nerdle from './pages/Nerdle.js';
import { AuthProvider } from './utils/authContext.js'





function App() {
  return (
      <Router>
        <AuthProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/nerdle' element={<Nerdle/>}></Route>
          </Routes>
        </AuthProvider>
      </Router>
  );
}



export default App;
