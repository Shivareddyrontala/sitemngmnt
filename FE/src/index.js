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
import Sidebar from './components/sidebar/Sidebar';
// for global state management
import GlobalContext from './context/GlobalContext';
import Punch from './pages/Employee/Punch';
import Otherinfo from './pages/OtherInfo/Otherinfo';
import TimeSheet from './pages/Timesheet/Timesheet'

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
  },
  {
    path : '/Other-info',
    element: <Otherinfo />,
  },
  {
    path : '/timesheet-info',
    element : <TimeSheet />
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
          <RouterProvider router={router} />
          <CssBaseline />
      </ThemeProvider>
    </GlobalContext>
      
  </React.StrictMode>
);