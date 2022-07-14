import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
// import Profile from './style/test';

// const root = document.createElement('div');
// root.setAttribute('id', 'root');
// document.body.appendChild(root);

// render(<App />, root);
// render(<Profile />, root);

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
