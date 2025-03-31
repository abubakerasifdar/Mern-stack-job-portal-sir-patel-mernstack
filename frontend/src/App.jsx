import './App.css'
import {createBrowserRouter ,RouterProvider, Outlet  } from "react-router-dom";
import { Button } from "@/components/ui/button"
import Login from "@/components/auth/Login"
import Register from "@/components/auth/Register"
import Home from "@/components/Home"
import Findjob from './components/client/Findjob';
import Jobdesc from './components/client/Jobdesc';
import Front from './components/client/Front';
import UserPublicProfile from './components/client/UserPublicProfile';
import Profile from './components/user/Profile';



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
    path:"/jobdesc/:id",
    element:<Jobdesc />
  },
  {
    path:"/profile",
    element:<UserPublicProfile />
  },
  {
    path:"user/profile",
    element:<Profile />
  }
  
]);

function App() {
  return (
    <RouterProvider router = {appRouter} />
  )
}

export default App
