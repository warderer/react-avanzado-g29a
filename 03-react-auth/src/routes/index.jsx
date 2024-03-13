import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Dashboard, Login, Secret, Signup, ProductDetail } from '@/pages'
import { useAuthContext } from '@/hooks/useAuthContext'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/dashboard'
        element={isAuth ? <Dashboard /> : <Navigate to='/login' />}
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/secret'
        element={isAuth ? <Secret /> : <Navigate to='/login' />}
      />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product/:pid' element={<ProductDetail />} />
    </Routes>
  )
}

export default RoutesIndex
