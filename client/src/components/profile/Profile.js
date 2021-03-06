import React, {Fragment,useEffect} from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import ProfileTop from './ProfileTop'
import {getProfileById} from '../../actions/profile'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience.js'
import ProfileEducation from './ProfileEducation'


const Profile = ({getProfileById,profile:{profile,loading},auth}) => {
    const {id} = useParams()

    useEffect(() => {
        

        getProfileById(id);
    },[getProfileById,id])
  
    return <Fragment>
        {profile === null || loading? <Spinner/>:<Fragment>
            <Link to = '/profiles' className='btn btn-light'>
                Back To Profiles
            </Link>
            {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to ="/edit-profile" className = "btn btn-dark">
                Edit Profile
            </Link>)}
            </Fragment>}
             <div className ="profile-grid my-1">
             {profile && <ProfileTop profile = {profile} />}
             {profile && <ProfileAbout profile = {profile}/>}
             <div className= "profile-exp bg-white p-2">
             <h2 class="text-primary">Experience</h2>
             
             {profile && profile.experience.length > 0 ? (<Fragment>
                 {profile.experience.map(experience => (
                     <ProfileExperience key = {experience._id} experience = {experience}/>
                 ))}
             </Fragment>) : (<h4> No experience credentials</h4>) }
          <div>
              

              

          </div>
             </div>
             <div className= "profile-edu bg-white p-2">
             <h2 class="text-primary">Education</h2>
             
             {profile && profile.education.length > 0 ? (<Fragment>
                 {profile.education.map(education => (
                     <ProfileEducation key = {education._id} education = {education}/>
                 ))}
             </Fragment>) : (<h4> No education credentials</h4>) }
          <div>
                    

              

              

          </div>
             </div>
            </div>
    </Fragment>;
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth : state.auth
})

export default connect(mapStateToProps, {getProfileById})(Profile)
