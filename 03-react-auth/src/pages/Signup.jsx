import logo from '@/assets/react.svg'
import '@/styles/form.css'

const Signup = () => {
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={() => {} /* HANDLE SUBMIT */} data-bitwarden-watching='1'>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='name@example.com'
          />
          <label htmlFor='name'>Nombre</label>
        </div>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='lastname'
            placeholder='name@example.com'
          />
          <label htmlFor='lastname'>Last name</label>
        </div>
        <div className='form-floating'>
          <select className='form-select' id='gender' name='gender'>
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>
        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
          />
          <label htmlFor='password'>Password</label>
        </div>
        <div className='form-floating'>
          <select className='form-select' id='role' name='role'>
            <option value=''>Choose...</option>
            <option value='ADMIN'>Admin</option>
            <option value='CUSTOMER'>Customer</option>
          </select>
          <label htmlFor='role'>Role</label>
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Sign up
        </button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
      </form>
    </main>
  )
}

export default Signup
