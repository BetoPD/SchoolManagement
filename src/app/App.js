import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import NavBar from '../components/NavBar';

function App() {
  return (
    <>
      <div className='navBar'>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
