import {
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE,SET_NAME,
    GET_LOCATION

} from './actionTypes'

export const getUsersLocation = () => {
    return dispatch => {
        navigator.geolocation.getCurrentPosition(
            position => {
                dispatch({
                    type: GET_LOCATION,
                    payload: position
                })
            },
            error => console.log('ERROR', error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }
}



export const setName=()=>{
    return{
        type:SET_NAME,
        payload:'Mary'
    }
}



export const addPlace=(placeName)=>{
    return{
     type:ADD_PLACE,
     placeName:placeName

    }
}
export const deletePlace=()=>{
    return {
        type:DELETE_PLACE
    }
}
export const selectPlace=(key)=>{
    return{
        type:SELECT_PLACE,
        placeKey:key
    }
}
export const deselectPlace=()=>{
    return{
        type:DESELECT_PLACE

    }
}