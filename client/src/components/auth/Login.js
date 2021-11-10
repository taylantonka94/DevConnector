/* eslint-disable react/no-typos */
import React, {Fragment, useState} from 'react'
import {Link,Navigate} from  "react-router-dom"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'



 const Login = ({login,isAuthenticated}) => {
    
    const [formData, setFormData] = useState({

        email: "",
        password: ""
    });

    const{email,password} = formData
    
    const onChange = e => {
      
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
        
    }

    const onSubmit = async e => {
      
        e.preventDefault();
        console.log(email,password)
        
        login({email,password})
        

    }

    // Redicrect if logged in 

    if(isAuthenticated){
      return <Navigate to = "/dashboard"/>
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit = {e => onSubmit(e)} >
        <div className="form-group">
         
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" onChange = {e => onChange(e)} value = {email} name="email" />

        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value = {password}
            onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          
        </div>
        <input type="submit" className="btn btn-primary" value="Login" onChange = {e => onChange(e)} />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
        </Fragment>
    )
}

Login.propTypes = {
  login : PropTypes.func.isRequired,
  isAuthenticated : PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated
})


export default connect(mapStateToProps,{login})(Login)