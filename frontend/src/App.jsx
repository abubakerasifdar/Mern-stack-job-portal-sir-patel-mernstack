import './App.css'
import {createBrowserRouter ,RouterProvider, Outlet  } from "react-router-dom";
import { Button } from "@/components/ui/button"
import Login from "@/components/auth/Login"
import Register from "@/components/auth/Register"
import Home from "@/components/Home"
import Findjob from './components/client/Findjob';
import Jobdesc from './components/client/Jobdesc';
import Front from './components/client/Front';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  // Use layout wrapper
  },
  {
    path:'/login',
    element:<Login />,
  },
  {
    path:"/register",
    element:<Register />
  },{
    path:"/findjob",
    element:<Findjob />
  },
  {
    path:"/jobdesc",
    element:<Jobdesc />
  }
  
]);

function App() {
  return (
    <RouterProvider router = {appRouter} />
  )
}

export default App
