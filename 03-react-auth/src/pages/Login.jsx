import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginUserServices } from '@/services/userServices'
import logo from '@/assets/react.svg'
import '@/styles/form.css'

const Login = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserServices(data)

      if (response.status === 200) {
        // Guardarmos el token en el localstorage
        // esta información permanece aún si se cierra el navegador
        localStorage.setItem('token', response.data.token)

        // console.log(response.data)
        navigate('/dashboard')
      }
    } catch (error) {
      alert('Error al registrar el usuario')
      console.log(error)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)} data-bitwarden-watching='1'>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please login</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>Login</button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2024</p>
      </form>
    </main>
  )
}

export default Login
