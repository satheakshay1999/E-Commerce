import React from 'react'

const Register = () => {
  return (
    <>
    {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-outline-dark mx-2" data-bs-toggle="modal" data-bs-target="#loginModal">
<i className="fa fa-user-plus me-1"></i> Register
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="loginModalLabel">Register </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <button className='btn btn-primary w-100'><i className='fa fa-google mx-4'></i>Login with Google</button>
      {/* <button className='btn btn-primary w-100 mt-4'> <i className='fa fa-envelope mx-4'></i>Login with Gmail</button>
      <button className='btn btn-primary w-100 mt-4 mb-4'> <i className="fa fa-facebook-official mx-4"></i>Login with Facebook</button> */}
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
  </div>
  <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
</form>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Register;