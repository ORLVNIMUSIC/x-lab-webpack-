import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './routes/app';
import './styles/index.scss';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hello</h1>}></Route>
        <Route path="/address" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
