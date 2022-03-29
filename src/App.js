import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AlbumList from 'pages/AlbumList';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AlbumList />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
