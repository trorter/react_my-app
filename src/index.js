import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state, {subscribe} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App state={state}/>
    </React.StrictMode>
  );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)