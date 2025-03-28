import './App.css'
import {createBrowserRouter ,RouterProvider, Outlet  } from "react-router-dom";
import { Button } from "@/components/ui/button"
import Login from "@/components/auth/Login"
import Register from "@/components/auth/Register"
import Home from "@/components/Home"



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
  }
]);

function App() {
  return (
    <RouterProvider router = {appRouter} />
  )
}

export default App
