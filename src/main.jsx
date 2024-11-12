import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Law from './pages/Law.jsx';
import History from './pages/History.jsx';
import Articles from './pages/Articles.jsx';
import Contacts from './pages/Contacts.jsx';
import Podcast from './pages/Podcast.jsx';
import CenteredLayout from './template/CenteredLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CenteredLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='leis-direitos' element={<Law />} />
          <Route path='historia' element={<History />} />
          <Route path='artigos' element={<Articles />} />
          <Route path='contatos' element={<Contacts />} />
          <Route path='podcast' element={<Podcast />} />
        </Routes>
      </CenteredLayout>
    </BrowserRouter>
  </StrictMode>
);
