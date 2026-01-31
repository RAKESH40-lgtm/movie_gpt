import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const routing = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    }
])
const Body = () => {
    const dispatch =useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                const {uid,displayName , email} = user;
                dispatch(addUser({userId : uid , username : displayName ,email}))
            } else {
               dispatch(removeUser())
            }
        });
    }, [])
    return (
        <RouterProvider router={routing} />
    )
}

export default Body
