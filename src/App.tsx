import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UsersPage from './components/pages/UsersPage';
import NotFoundPage from './components/pages/NotFound';
import AlbumsPage from './components/pages/AlbumsPage';
import PhotosPage from './components/pages/PhotosPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<UsersPage />} />
          <Route path="user/:userId/albums" element={<AlbumsPage />} />
          <Route path="user/:userId/album/:albumId" element={<PhotosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
 
      </BrowserRouter>
    </div>
  );
}

export default App;
