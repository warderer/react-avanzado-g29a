import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const PrivateRoutes = () => {
  const { isAuth } = useAuthContext()
  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes
