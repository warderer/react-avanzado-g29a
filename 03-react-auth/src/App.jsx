import './App.css'
import Header from './components/Header'
import { Home, Dashboard, Login, Secret, Signup } from '@/pages'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Dashboard />
      <Login />
      <Secret />
      <Signup />
    </>
  )
}

export default App
