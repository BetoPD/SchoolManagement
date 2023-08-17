import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomePage from '../containers/HomePage';
import HomeWorks from '../containers/HomeWorks';
import SocialServices from '../containers/SocialServices';
import Subjects from '../containers/Subjects';
import Subject from '../features/subject/subject';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/subject'>
          <Route index element={<Subjects/>}/>
          <Route path=':id' element={<Subject />}/>
        </Route>
        <Route path='/homework' element={<HomeWorks />}/>
        <Route path='/socialservice' element={<SocialServices />}/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
