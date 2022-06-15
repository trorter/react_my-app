import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'It\'s my fist post', likesCount: '100'},
  {id: 2, message: 'Hi! How are you?', likesCount: '11'},
  {id: 3, message: 'Stub / mock post', likesCount: '12'},
  {id: 4, message: 'NEW ONE', likesCount: '22'}
]

let dialogs = [
  {id: 1, name: 'Andrew'},
  {id: 2, name: 'Nick'},
  {id: 3, name: 'Sally'},
  {id: 4, name: 'Sarah'},
]

let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'What\'s up?'},
  {id: 3, message: 'How is your studying?'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
