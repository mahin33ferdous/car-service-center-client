import React, { useContext } from 'react';
import img from '../../img/login.webp'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Login = () => {
   const {signInUser}=useContext(AuthContext)
  
    const handleLogin=e=>{
        e.preventDefault()
        const form =e.target;
        const email=form.email.value;
        const password= form.password.value;

        signInUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user)
        })
        .catch(err=>console.error(err))
    }
    return (
        <div className="hero w-ful my-20">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt=''/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type='submit' value='Login'></input>
          
        </div>
      </form>
      <p>Don't have an account?<Link className='text-orange-600 font-bold' to="/signup">Sign up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;