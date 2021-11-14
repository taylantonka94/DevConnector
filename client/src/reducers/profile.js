/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { GET_PROFILE,PROFILE_ERROR, CLEAR_PROFILE } from "../actions/types";

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
                loading:false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile : null,
                repose: [],
                loading: false
            }

        default:
            return state

    }

}