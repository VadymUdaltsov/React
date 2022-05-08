import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
  { message: 'Hi, how are you?', likesCount: 5 },
  { message: "It's my first post.", likesCount: 15 }
];

let dialogsData = [
  { url: '/dialogs/1', name: 'Vadym' },
  { url: '/dialogs/2', name: 'Kirill' },
  { url: '/dialogs/3', name: 'Yasya' },
  { url: '/dialogs/4', name: 'Galina' },
  { url: '/dialogs/5', name: 'Sergey' },
  { url: '/dialogs/6', name: 'Kolya' }
];

let messagesData = [
  { message: 'Hi', id: 1 },
  { message: 'How are you?', id: 2 },
  { message: 'What are you doing?', id: 3 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
