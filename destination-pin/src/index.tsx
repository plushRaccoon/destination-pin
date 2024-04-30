import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MainPage from './pages/main-page/main-page';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInSide from './components/sign-in-form/signInForm';
import SignUp from './components/sign-up-form/signUpForm';

const rootElement = document.getElementById('root');
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/signin',
    element: <SignInSide />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
