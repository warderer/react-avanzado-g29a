import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// Para usar Context, necesitamos seguir una serie de pasos.

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el Provider (Proveedor del Contexto)
function AuthProvider ({ children }) {
  // Aquí va mi lógica
  const [isAuth, setIsAuth] = useState(false) // ¿Esta autenticado?
  const [userPayload, setUserPayload] = useState(null) // Información del Payload del token

  const login = (token) => {
    localStorage.setItem('token', token) // Guardo el token en el localStorage
    const payload = jwtDecode(token)
    setIsAuth(true)
    setUserPayload(payload)
  }

  const logout = () => {
    localStorage.removeItem('token') // Remuevo el token del localStorage
    setIsAuth(false)
    setUserPayload(null)
  }

  useEffect(() => {
    const token = localStorage.getItem('token') // Obtengo el token del localStorage
    if (token) { // Si el token existe, entonces el usuario está autenticado
      const payload = jwtDecode(token)
      setIsAuth(true)
      setUserPayload(payload)
    }
  }, [])

  return (
  // El provider recibe una prop llamada value, que es la información que queremos compartir.
    <AuthContext.Provider value={{ login, logout, isAuth, userPayload }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
