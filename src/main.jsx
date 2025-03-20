import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddEquipment from './Pages/AddEquipment.jsx';
import AllEquipment from './Pages/AllEquipment.jsx';
import LogIn from './Pages/LogIn.jsx';
import Register from './Pages/Register.jsx';
import MyEquipmentList from './Pages/MyEquipmentList.jsx';
import DetailsOfEquipment from './Pages/DetailsOfEquipment.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import Home from './Home.jsx';
import ErrorElement from './Pages/ErrorElement.jsx';
import UpdateEquipment from './Pages/UpdateEquipment.jsx';
import DetailsOfProduct from './Pages/DetailsOfPRoduct.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorElement></ErrorElement>
  },
  {
    path : "/:id",
    element:<PrivateRoute><DetailsOfProduct></DetailsOfProduct></PrivateRoute>,
    // loader: ({params}) => fetch(`/ProductData.json/${params.id}`)
  },
  {
    path:'/home',
    element: <Home></Home>,
    children : [
      {
        path: '/home/addequipment',
        element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
      },
      {
        path: '/home/allequipment',
        element:<PrivateRoute><AllEquipment></AllEquipment></PrivateRoute>,
        loader: () => fetch('https://mrs-sports-server.vercel.app/equipment'),
      },
      {
          path: '/home/allequipment/:id',
          element: <PrivateRoute><DetailsOfEquipment></DetailsOfEquipment></PrivateRoute>,
          loader: ({params}) => fetch(`https://mrs-sports-server.vercel.app/equipment/${params.id}`)
      },
      {
        path: "/home/mylist",
        element: <PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>,
        loader: () => fetch(`https://mrs-sports-server.vercel.app/equipment`)
      },
      {
        path: "/home/mylist/:id",
        element: <PrivateRoute><UpdateEquipment></UpdateEquipment></PrivateRoute>,
        loader: ({params}) => fetch(`https://mrs-sports-server.vercel.app/equipment/${params.id}`)
      },
      {
        path: '/home/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/home/register',
        element:<Register></Register>
      },
    ],
  },
  
  
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
