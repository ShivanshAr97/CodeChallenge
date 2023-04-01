import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Navbar from './components/Navbar';
import About from './components/About/About';
import Main from './components/Main';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Main />} />
      </Routes>
      
    </>
  );
};

export default App;
