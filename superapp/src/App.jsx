
import './App.css'
import BankDetails from './components/apps/BankDetails';
import GitHubAccountFinder from './components/apps/GitHubAccountFinder';
import Index from './components/apps/Index';
import MovieFinder from './components/apps/MovieFinder'
import TodoApp from './components/apps/TodoApp'
import { Route, BrowserRouter as Routers, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/movie-finder' element={<MovieFinder />} />
          <Route path='/bank-details' element={<BankDetails />} />
          <Route path='/todo-app' element={<TodoApp />} />
          <Route path='/github-account-finder' element={<GitHubAccountFinder />} />
        </Routes>
      </Routers>
    </>
  )
}

export default App
