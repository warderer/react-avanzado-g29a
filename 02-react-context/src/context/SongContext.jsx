import { createContext } from 'react'
// CONTEXT tiene que ver con el manejo de estados globales en REACT.
// Es decir, poder compartir LA MISMA información entre diferentes NIVELES de componentes.

// Para usar Context, necesitamos seguir una serie de pasos.

// 1. Crear el contexto
const SongContext = createContext()

// 2. Crear el Provider (Proveedor del Contexto)
// El provider es un componente que envuelve a los componentes que necesitan acceder a la información del contexto. El provider maneja donde se obtiene la información y como se comparte.

function SongProvider ({ children }) {
  return (
    // El provider recibe una prop llamada value, que es la información que queremos compartir.
    <SongContext.Provider value={{}}>
      {children}
    </SongContext.Provider>
  )
}

export { SongContext, SongProvider }
