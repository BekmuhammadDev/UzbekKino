import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/layout/header'

export const App = () => {
  return (
    <>
    <Header/>
      <Outlet/>
    </>
  )
}
