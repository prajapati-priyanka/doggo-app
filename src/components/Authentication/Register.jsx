import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthenticationStyles from "./Authentication.module.css";
import { Login } from "./Login";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const checkIfAllInputIsPresent = (userData) => {
    if (
      userData.firstName === "" ||
      userData.lastName === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.confirmPass === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const signupHandler = (e) => {
    e.preventDefault();

    console.log("clicked", userData);

    if (!checkIfAllInputIsPresent(userData)) {
      setError(true);
      console.log("Some of the input is not there")
    } else {
      setError(false);

       localStorage.setItem("user", JSON.stringify(userData));

      
      console.log("SAved in local storage");
      setLogin(!login)
    }
   
  };

  return (
    <div>
      <main className={AuthenticationStyles.formWrapper}>
        <div className={AuthenticationStyles.formLogin}>
        
       {login ? (<form
            className={AuthenticationStyles.formContent}
            onSubmit={signupHandler}
          >
              <h2 className={AuthenticationStyles.formTitle}>Signup</h2>
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              className={AuthenticationStyles.inputField}
              placeholder="First Name"
              name="firstName"
              value={userData.firstName}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              className={AuthenticationStyles.inputField}
              placeholder="Last Name"
              name="lastName"
              value={userData.lastName}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              className={AuthenticationStyles.inputField}
              placeholder="Enter email here"
              name="email"
              value={userData.email}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="pass">Password</label>
            <span className={AuthenticationStyles.inputPassword}>
              <input
                type={showPassword ? "type" : "password"}
                id="pass"
                className={AuthenticationStyles.inputField}
                placeholder="*******"
                name="password"
                value={userData.password}
                onChange={(e) => onChangeHandler(e)}
              />
              <span
                className={AuthenticationStyles.eyeIcon}
                onClick={() => setShowPassword((prevPass) => !prevPass)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </span>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <span className={AuthenticationStyles.inputPassword}>
              <input
                type={showConfirmPassword ? "type" : "password"}
                id="confirm-password"
                className={AuthenticationStyles.inputField}
                placeholder="*******"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={(e) => {
                  onChangeHandler(e);
                  //   checkPassword(e.target.value);
                }}
              />
              <span
                className={AuthenticationStyles.eyeIcon}
                onClick={() =>
                  setShowConfirmPassword((prevConfirmPass) => !prevConfirmPass)
                }
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </span>
            {error && (
              <div className={AuthenticationStyles.error}>
                "You should enter all the details"
              </div>
            )}

            <button className={AuthenticationStyles.btn} type="submit">
              CREATE NEW ACCOUNT
            </button>
            <p className="new-account ">
              Already have an account
              <MdOutlineArrowForwardIos
                className={AuthenticationStyles.forwardIcon}
              />
            </p>
          </form>): <Login />}   
        </div>
      </main>
    </div>
  );
};

export { Register };
