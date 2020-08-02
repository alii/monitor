// Import required modules
import React from 'react';
import ReactDOM from 'react-dom';

// Supports SCSS!
import './app.scss';
import { App } from './App';

// Define our container
const root = document.createElement('div');
root.id = 'root';

// Render!
ReactDOM.render(<App />, document.body.appendChild(root));
