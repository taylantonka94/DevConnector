/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { GET_PROFILE,PROFILE_ERROR,GET_REPOS, GET_PROFILES,CLEAR_PROFILE,UPDATE_PROFILE, ACCOUNT_DELETED } from "../actions/types";

const initialState = {
    profile: null,
    profiles : [],
    repos : [],
    loading: true,
    error : {}
}


export default function(state = initialState, action) {

    const {type, payload} = action;

    switch(type){
        case GET_PROFILE:
            return  {
                ...state,
                profile:payload,
                loading:false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error:payload,
                loading:false,
                profile: null
            }
        case UPDATE_PROFILE:
            return {
                ...state,
                profile:payload,
                loading:false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile : null,
                repose: [],
                loading: false
            }
        case ACCOUNT_DELETED:
            return {
                ...state,
                profile : null,
                repose: [],
                loading: false
            }
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            }

        case GET_REPOS:
            return{
                ...state,
                loading:false,
                repos:payload
            }

        default:
            return state

    }

}