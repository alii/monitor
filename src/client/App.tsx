import * as React from 'react';
import useFetch from 'use-http';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import { Home, Products } from './pages';

const App: React.FC = () => {
  const { data, loading } = useFetch('/api/getSites', []);

  return (
    <Router>
      <Sidebar />
      <div className="app">
        <Route path={'/'} component={Home} exact />
        <Route path={'/products'} component={Products} exact />
      </div>
    </Router>
  );
};

export default App;
