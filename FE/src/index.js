import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Employee from './pages/Employee/Employee';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from './components/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import GlobalContext from './context/GlobalContext';
import Punch from './pages/Employee/Punch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path : '/Employee-Info',
    element: <Employee />,
  },
  {
    path : '/punch',
    element: <Punch />,
  }
]);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <ThemeProvider theme={darkTheme}>
              <Topbar />
              <div className='root_container_flex'>
                  <div className='root_container_left'>
                    <Sidebar />
                  </div>
                  <div className='root_container_right'>
                    <RouterProvider router={router} />
                  </div>
              </div>
              <CssBaseline />
      </ThemeProvider>
    </GlobalContext>
      
  </React.StrictMode>
);