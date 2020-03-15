import React from 'react';
import { render } from 'react-dom';
import App from './App';

import 'reset-scss/reset.scss';

import '@fortawesome/fontawesome-free';
import './styles/app.scss';
import useFetch from 'use-http';

const Root = () => {
  const { loading, data: env } = useFetch('/api/getEnv');
  return loading ? <p>Loading</p> : <App env={env} />;
};

render(<Root />, document.getElementById('root'));
