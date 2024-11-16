import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import AdminPage from './components/adminpage/AdminPage';
import {UserProvider} from './components/UserContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="admin" element={<AdminPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
