import {
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE,
    SET_NAME,
    GET_LOCATION
} from '../actions/actionTypes'
import myImage from '../../../assets/cat.png'

const initialState={
    places:[],
    set:'Nona',
    position:null
}
const reducer=(state=initialState,action)=>{
   switch(action.type){
       case ADD_PLACE:
        return{
            ...state,
            places:state.places.concat({
                key:Math.random(),
                name:action.placeName,
                image:{
                    uri:myImage
                }
            })
        }
        case SET_NAME:
            return{
                ...state,
                set:action.payload
            }
        case GET_LOCATION:
            return{
                ...state,
                position:action.payload
            }    
      
       default:
       return state
   }
}
export default reducer