import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position={"top-center"}/>
      <App/>
    </Provider>
  </React.StrictMode>,
);
