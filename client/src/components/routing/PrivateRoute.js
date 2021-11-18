import React from 'react'
import {  Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'




const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading },...rest }) => {
      
    const auth = !isAuthenticated && !loading ;

    console.log(rest)
    return auth? <Navigate to='/login' /> : <Component {...rest} />
}









PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
