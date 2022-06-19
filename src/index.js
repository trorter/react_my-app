import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/state";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)