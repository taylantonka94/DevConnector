import React, { Fragment, useEffect } from "react"
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing"
import Alert from "./components/layout/Alert"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import { loadUser } from './actions/auth'
import setAuthToken from './utills/setAuthToken'
import Dashboard from "./components/Dashboard/Dashboard"
import CreateProfile from "./components/profile-forms/CreateProfile.js"
import editprofile from "./components/profile-forms/editprofile"
import AddExperience from "./components/profile-forms/AddExperience"
import AddEducation from "./components/profile-forms/AddEducation"
import Profiles from "./components/profiles/Profiles"
import Profile from "./components/profile/Profile"
import Posts from './components/posts/Posts'
import PrivateRoute from "./components/routing/PrivateRoute"
// Redux

import { Provider } from 'react-redux';
import store from './store'
import Post from "./components/post/Post"


if (localStorage.token) {
  
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (

    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Landing />} />

          </Routes>
          <section className="container">
            <Alert />
            <Routes>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                path = "/dashboard"
                element = {
                  <PrivateRoute component = {Dashboard}/>
                }/>
                <Route exact path="/profiles" element={<Profiles />} />
                <Route exact path="/profile/:id" element={<Profile />} />
                              <Route
                path = "/create-profile"
                element = {
                  <PrivateRoute component = {CreateProfile}/>
                }/>
                <Route
                path = "/dashboard"
                element = {
                  <PrivateRoute component = {Dashboard}/>
                }/>
                                <Route
                path = "/edit-profile"
                element = {
                  <PrivateRoute component = {editprofile}/>
                }/>
                <Route
                path = "/add-experience"
                element = {
                  <PrivateRoute component = {AddExperience}/>
                }/>
                                <Route
                path = "/add-education"
                element = {
                  <PrivateRoute component = {AddEducation}/>
                }/>
                <Route
                path = "/posts"
                element = {
                  <PrivateRoute component = {Posts}/>
                }/>
                <Route
                path = "/post/:id"
                element = {
                  <PrivateRoute component = {Post}/>
                }/>
                

            </Routes>
          </section>

        </Fragment>
      </Router>
    </Provider>


  )
}

export default App;
