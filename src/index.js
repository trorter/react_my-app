import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)