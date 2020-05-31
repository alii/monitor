import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Routing
import { Home, Products, Config, Sites, Logs } from './pages';
import Sidebar from './components/Sidebar';

// Theme
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import openSocket from 'socket.io-client';
const socket = openSocket(location.protocol + '//' + location.hostname + ':' + 3000);

import { ToastsContainer, ToastsStore } from 'react-toasts';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logs: [],
    };

    socket.on('message', data => ToastsStore[data.type](data.message, 5000));
    socket.on('log', (type, ...args) => {
      console.log(type, args);
      const clonedLogs = this.state.logs;
      clonedLogs.unshift({ type, arguments: [...args], date: new Date().toTimeString() });

      this.setState({
        ...this.state,
        logs: clonedLogs,
      });
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Sidebar />
          <div className="app">
            <Route path={'/'} component={Home} exact />
            <Route path={'/products'} component={Products} exact />
            <Route path={'/config'} component={Config} exact />
            <Route path={'/sites'} component={Sites} exact />
            <Route path={'/logs'} component={() => <Logs logs={this.state.logs} />} exact />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

const App = () => {
  return (
    <>
      <ToastsContainer store={ToastsStore} />
      <Main />
    </>
  );
};

export default App;
