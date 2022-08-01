import React from 'react';
import List from './pages/List';
import Lists from './pages/Lists';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<List />}>
        <Route path=":memId" element={<Lists />}></Route>
      </Route>
    </Routes>
    </>
  )
};

export default App;