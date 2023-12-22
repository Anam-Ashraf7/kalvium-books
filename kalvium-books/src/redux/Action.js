
import { REGISTER_USER } from './RegisterUser'

export const RegisterUser = (payload) => {
  return {
    type : REGISTER_USER,payload
  }
}

export default RegisterUser