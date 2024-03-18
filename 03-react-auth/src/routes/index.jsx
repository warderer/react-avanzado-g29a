import { Routes, Route } from 'react-router-dom'
import { Home, Dashboard, Login, Secret, Signup, ProductDetail } from '@/pages'
import PrivateRoutes from '@/helpers/PrivateRoutes'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product/:pid' element={<ProductDetail />} />

      {/* RUTAS PRIVADAS */}
      <Route element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/secret' element={<Secret />} />
      </Route>

    </Routes>
  )
}

export default RoutesIndex
