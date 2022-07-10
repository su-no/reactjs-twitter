import App from 'components/App';
import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom/client';

console.log(firebase)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);