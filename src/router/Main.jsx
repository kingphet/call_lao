import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../page/Home'
import SignIn from '../page/SignIn'
import Login from '../page/Login'
import Welcome from '../page/Welcome'
import Translator_lists_page from '../page/Translator_lists_page'
import Profile from '../page/Profile'
import PayMent from '../page/PayMent'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/SignIn",
        element: <SignIn />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Welcome",
        element: <Welcome />
    },
    {
        path: "/Translator_lists_page",
        element: <Translator_lists_page />
    },
    {
        path: "/Profile",
        element: <Profile />
    },
    {
        path: "/PayMent",
        element: <PayMent />
    },
])
function Main() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Main
