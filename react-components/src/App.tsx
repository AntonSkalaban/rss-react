import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Main } from './pages/Main/Main';
import { About } from './pages/About/About';
import { NotFound } from './pages/NotFound/NotFound';
import { Layout } from './components/Layout';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
