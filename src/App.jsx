import React from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Careers } from './pages/Careers'
import { Cards } from './pages/Cards'

export const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Careers/>
    <Cards/>

    </>
  )
}