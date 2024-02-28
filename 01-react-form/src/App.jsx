import './App.css'
import logo from './assets/react.svg'

function App() {

  return (
    <>
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt="Logo del form" />
        <form>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name='email' 
            placeholder='correo@correo.com'
            id='email'
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name='password'
            id='password'
          />
          <button type='submit'>Iniciar Sesion</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
