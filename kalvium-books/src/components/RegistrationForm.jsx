
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const onSubmit = () => {
    
}

const validate = (values) => {

    let errors = {}
    const regexPattern = /^[\w\-\\.]+@([\w-]+\.)+[\w-]{2,}$/gm
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']

    // Name Validation

    if(!values.name) {
        errors.name = "Name is required"
    }

    if(values.name.length < 3) {
        errors.name = "Name should be atleast 3 characters long"
    }else if(values.name.length > 30) {
        errors.name = "Name should not exceed 30 characters"
    }

    // Email Validation

    if(!values.email) {
        errors.email = "Email is required"
    }else if (!regexPattern.test(values.email)){
        errors.email = "Invalid email format"
    }

    // Password Validation

    if(!values.password) {
        errors.password = "Password is required"
    }

    if(values.password.length < 10) {
        errors.password = "Password should be atleast 10 characters long"
    }else if (!specialCharacters.some(char => values.password.includes(char))) {
        errors.password = "Password should have atleast one special character"
    }

    // Repeat Password Validation

    if(!values.repeatPassword){
        errors.repeatPassword = "Repeat password is required"
    }

    if(values.password !== values.repeatPassword) {
        errors.repeatPassword = "Password does not match"
    }

    return errors
}


function RegistrationForm() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formik.errors)

  return (

    <div id="form-container">

      <h1>Create Account</h1>
      
      <form id="registration-form" onSubmit={formik.handleSubmit}>

        <div className="input-container">

            <label htmlFor="name">Name</label>
            <input
            type="text"
            placeholder="John Doe"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null }

        </div>

        <div className="input-container">

            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            placeholder="example@email.com"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null }

        </div>

        <div className="input-container">

            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null }

        </div>

        <div className="input-container">

            <label htmlFor="repeat-password">Repeat Password</label>
            <input
            type="password"
            id="repeat-password"
            placeholder="Repeat your password"
            name="repeatPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatPassword}
            />

            {formik.touched.repeatPassword && formik.errors.repeatPassword ? <p>{formik.errors.repeatPassword}</p> : null }

        </div>

        <button type="submit" id="sign-up">Sign up</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
