import React from 'react'
import Start from './pages/Start'
import { Route, Routes } from 'react-router-dom'
import { Quiz } from './pages/Quiz'
import { EasyChords } from './pages/EasyChords'
import { Send } from './pages/Send'
import { EasyChords2 } from './pages/EasyChords2'
import { Wallpapers } from './pages/Wallpapers'
import { SearchFilm } from './pages/SearchFilm'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/easychords' element={<EasyChords/>}/>
      <Route path='/send' element={<Send/>}/>
      <Route path='/easychords2' element={<EasyChords2/>}/>
      <Route path='/wallpapers' element={<Wallpapers/>}/>
      <Route path='/searchfilm' element={<SearchFilm/>}/>
    </Routes>
    </>
  )
}

export default App
