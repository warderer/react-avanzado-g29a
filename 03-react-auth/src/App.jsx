import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RoutesIndex from './routes'
import Header from './components/Header'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
