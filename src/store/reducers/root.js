import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE,SET_NAME} from '../actions/actionTypes'

const initialState={
    places:[],
    set:'Nona'
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
                    uri:"https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg"
                }
            })
        }
        case SET_NAME:
            return{
                ...state,
                set:action.payload
            }
      
       default:
       return state
   }
}
export default reducer