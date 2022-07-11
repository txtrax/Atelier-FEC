import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
// import Profile from './style/test';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

render(<App />, root);
// render(<Profile />, root);
