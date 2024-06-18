
import './App.css'
import Index from './components/apps/Index';
import MovieFinder from './components/apps/MovieFinder'
import { Route, BrowserRouter as Routers, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/movie-finder' element={<MovieFinder />} />
        </Routes>
      </Routers>
    </>
  )
}

export default App
