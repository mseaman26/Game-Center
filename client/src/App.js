import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'




function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </Router>
  );
}



export default App;
