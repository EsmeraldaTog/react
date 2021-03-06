import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3l4fzUGiKyBHeEP9GV87HlTDRatSlmBI",
  authDomain: "react31160-esmeralda.firebaseapp.com",
  projectId: "react31160-esmeralda",
  storageBucket: "react31160-esmeralda.appspot.com",
  messagingSenderId: "2999554835",
  appId: "1:2999554835:web:e1dd6d12387fc8102b40e6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
createRoot(
  document.getElementById('root')
).render (
    <App />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
