import React from 'react'
import ReactDOM from 'react-dom/client'
import TelaInicio from './TelaInicio.jsx';
import"./index.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Organizador from './views/Organizador.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element: <TelaInicio/>,
    },
    {
      path: "/Organizador",
      element: <Organizador/>,
    },
]);
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
