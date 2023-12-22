

import { useFormik } from "formik"
import {RegisterUser} from "../redux/Action"


const initialValues = {
    loginEmail: "",
    loginPassword: ""
  };

const onSubmit = values => {

}

const validate = values => {

    let errors = {}

    // if(values.loginEmail)

    return errors

}


function LoginForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
      });



    const mapStatetoProps = state => {
    return {
        userDetails: state.registrationData
        }
    }

    const mapDispatchtoProps = dispatch => {
        return {
            registerUser: dispatch(registerUser())
        }
    }

    return (
        <div id='login-form-container'>

            <form id="login-form" onSubmit={formik.handleSubmit} >

                <div className="input-container">

                    <label htmlFor="login-email">Email</label>
                    <input
                    type="email"
                    placeholder="Email id"
                    id="login-email"
                    name="loginEmail"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.loginEmail}
                    />

                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null }

                </div>

                <div className="input-container">

                    <label htmlFor="login-password">Password</label>
                    <input
                    type="password"
                    id="login-password"
                    placeholder="Password"
                    name="loginPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.loginPassword}
                    />

                    {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null }

                </div>

            </form>

        </div>
  )
}

export default LoginForm