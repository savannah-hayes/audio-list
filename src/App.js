import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AlbumList from 'pages/AlbumList';
import AlbumDetail from 'pages/AlbumDetail';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AlbumList />}></Route>
        <Route path='/albums/:albumId' element={<AlbumDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
