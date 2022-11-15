import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Favorite from './pages/favorite-films/Favorite'
import Details from './pages/film-details/Details'
import Home from './pages/homepage/Home'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/favorite' element={<Favorite />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  )
}

export default AppRouter
