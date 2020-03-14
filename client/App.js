import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import { Home, Products, Config, Sites } from './pages';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar />
        <div className="app">
          <Route path={'/'} component={Home} exact />
          <Route path={'/products'} component={Products} exact />
          <Route path={'/config'} component={Config} exact />
          <Route path={'/sites'} component={Sites} exact />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
