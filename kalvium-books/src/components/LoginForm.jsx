import { useFormik } from "formik";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialValues = {
  loginEmail: "",
  loginPassword: "",
};

const mapStatetoProps = (state) => {
  return {
    userDetails: state.registrationData,
  };
};

function LoginForm(props) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      let errors = {};

      //Validate with info from sign-up page

      if (values.loginEmail !== props.userDetails.email) {
        errors.loginEmail = "Email ID not found";
      }

      if (values.loginPassword !== props.userDetails.password) {
        errors.loginPassword = "Incorrect password";
      }

      if (Object.keys(errors).length > 0) {
        formik.setErrors(errors);
        return;
      }

      //redirect to home after log in

      navigate("/");
    },
  });

  return (
    <div id="login-form-container">
      <h1>Login</h1>

      <form id="login-form" onSubmit={formik.handleSubmit}>
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

          {formik.touched.loginEmail && formik.errors.loginEmail ? (
            <p>{formik.errors.loginEmail}</p>
          ) : null}
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

          {formik.touched.loginPassword && formik.errors.loginPassword ? (
            <p>{formik.errors.loginPassword}</p>
          ) : null}
        </div>

        <button type="submit" id="log-in">
          Log In
        </button>
      </form>
    </div>
  );
}

export default connect(mapStatetoProps)(LoginForm);
