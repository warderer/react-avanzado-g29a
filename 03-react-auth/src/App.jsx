import { AuthProvider } from '@/context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes'
import Header from './components/Header'
import './App.css'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
