import React from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Careers } from './pages/Careers'
import { Cards } from './pages/Cards'
import { Built } from './pages/Built'
import { Ready } from './pages/Ready'
import { About } from './pages/About'
import { Login } from './pages/Login'


export const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Careers/>
    <Cards/>
    <Built/>
    <Ready/>
    <About/>
    <Login/>

    </>
  )
}