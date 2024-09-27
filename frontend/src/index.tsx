import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/Main/App.tsx';
import { ErrorPage } from './pages/Error/ErrorPage.tsx';
import { Login } from './pages/Login/Login.tsx'; 
import './assets/styles/globals.css'
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { Register } from './pages/Registration/Register.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },  
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>
);
