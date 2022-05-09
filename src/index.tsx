import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import './styles/index.css';
import HomePage from './views/home';

const page2repo: Record<string, string> = {
  // maps from page path to repo path
  'home': 'src/views/home',
};

const App = () => {
  const href = window?.location?.href.split('/').slice(3).join('/');

  return (
    <Router>
      <Layout path={page2repo[href]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

