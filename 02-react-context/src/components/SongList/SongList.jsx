import { useState, useEffect } from 'react'
import './songlist.css'
// Usamos la @ para no tener que poner ../../
// import canciones from '../../assets/listaCanciones.json'
import canciones from '@/assets/listaCanciones.json'

const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  // Simulo la llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <section className='row-container'>
      {loading
        ? <h1>Cargando...</h1>
        : list.map((song) => (
          <div key={song.id} className='row-song'>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
        ))}
    </section>
  )
}
export default SongList
