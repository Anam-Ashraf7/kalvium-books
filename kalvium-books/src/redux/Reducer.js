
import { REGISTER_USER } from "./RegisterUser"


const initialState = {
    registrationData: {}
}


export const reducer = (state=initialState,action) => {
  
  switch(action.type) {

    case REGISTER_USER: {
      return {...state,registrationData:action.payload}
    }

    default: return state
    
  }

}

export default reducer