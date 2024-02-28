import { useState } from 'react'
import './App.css'
import logo from './assets/react.svg'

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password', password);
  }

  return (
    <>
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt="Logo del form" />
        <form onSubmit={handlerOnSubmit}>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name='email' 
            placeholder='correo@correo.com'
            id='email'
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name='password'
            id='password'
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
          />
          <button type='submit'>Iniciar Sesion</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
