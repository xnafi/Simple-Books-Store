import React from 'react'
import { RouterProvider } from 'react-router-dom'
// import { RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import { router } from './Router'
// import { router } from './Router'

function App() {
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
