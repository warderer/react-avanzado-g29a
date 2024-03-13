import { createContext } from 'react'
// Para usar Context, necesitamos seguir una serie de pasos.

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el Provider (Proveedor del Contexto)
function AuthProvider ({ children }) {
  // Aquí va mi lógica

  return (
  // El provider recibe una prop llamada value, que es la información que queremos compartir.
    <AuthContext.Provider value={{ }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
