import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import MainPage from './routes/mainPage';
import SearchPage from './routes/searchPage';
import './styles/index.scss';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/address" element={<SearchPage />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  </React.StrictMode>
);
