import React from 'react'
import { useAuth } from '../Context/AuthProvider'


export const SignIn = () => {

  const {signIn} = useAuth()

  return (
    <div className='row mt-5'>
      <div className="col-md-6">
        <h2>Sign In</h2>
        <hr/>
        <form action="">
          <div className="form-group">
              <input type="email" className='form-control' name='email' aria-describedby='helpId' placeholder='Email' />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' name='password' aria-describedby='helpId' placeholder='Password' />
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className='form-check-label'>
                <input type="checkbox" className='form-check-input' name='rememberMe' value= "checkedValue" />
                  Remember Me
              </label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" className='btn btn-primary' value="Log In" />
          </div>
          <div className="form-group">
            <input             
            onClick ={ signIn }
            className='btn btn-success' 
            type="button" 
            value="Sign In with Google" />
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <h2>Register</h2>
        <hr />
        <form action="">
          <div className="form-group">
            <input type="text" className='form-control' name='username' aria-describedby='helpId' placeholder='Username' />
          </div>
          <div className="form-group">
            <input type="email" className='form-control' name='email' aria-describedby='helpId' placeholder='Email' />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' name='password' aria-describedby='helpId' placeholder='Password' />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' name='confirmPassword' aria-describedby='helpId' placeholder='Confirm Password' />
          </div>
        </form>
        <input  type="submit" className='btn btn-success' value="Register" />
      </div>
    </div>
  )
}
