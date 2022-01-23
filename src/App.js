import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './container/home';
import Profile from './container/profile';

const App = () => {
  return(
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/profile/:name' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App;