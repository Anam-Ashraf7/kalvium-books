
import { RegisterUser } from './Action'


const initialState = {
    registrationData: {}
}


export const reducer = (state=initialState,action) => {
  
  switch(action.type) {
    
    case RegisterUser: {
      return {...state,registrationData:action.payload}
    }

    default: return state
    
  }

}

export default reducer