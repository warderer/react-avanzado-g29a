import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso #2 Crear el estado para el email y password  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Paso #4 Crear la funcion para manejar el evento submit   
  const handlerOnSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se recargue
    console.log("Email:", email);
    console.log("Password", password);
  };
  // Paso #1 Crear el formulario base con JSX
  return (
    <div className="login">
      <div className="login-container">
        <img src={logo} alt="Logo del form" />
        <form onSubmit={handlerOnSubmit}>
            {/* Paso #3 Guardar cada cambio de los imputs */}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="correo@correo.com"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;
