import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/index.css';
import App from './App';
import LoginView from './views/Login';
import SignupView from './views/Signup';
import ErrorView from './views/Error';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorView />,
}, {
  path: '/signup',
  element: <SignupView />
}, {
  path: '/login',
  element: <LoginView />
}]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
