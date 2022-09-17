import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import AuthenticationStyles from "./Authentication.module.css";


const Login = () => {
 
// const [error, setError] = useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

//   const guestUser = {
//     email: "test123@gmail.com",
//     password: "testing123",
//   };

//   const guestLoginHandler = (e) => {
//     e.preventDefault();
//     setUser(guestUser);
//   };

  const loginHandler = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("user"))

    if (user.email === "" || user.password === "") {
    //   toast.warning("Email & Password cannot be empty");
    alert("All fields sholuf be filled")

    } else if((user.email !== data.email) || (user.password !== data.password)) {
    //   loginService(user, authDispatch, navigate, location);
    alert("Invalid mail Id or password")
    }
    else{
        console.log("You are logged In")
    }
  };

  return (
    <main className={AuthenticationStyles.formWrapper}>
      <div className={AuthenticationStyles.formLogin}>
        <h3 className={AuthenticationStyles.formTitle}>Login</h3>
        <form
          className={AuthenticationStyles.formContent}
          onSubmit={(e) => loginHandler(e)}
        >
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className={AuthenticationStyles.inputField}
            name="email"
            placeholder="tanay@neog.camp"
            value={user.email}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            className={AuthenticationStyles.inputField}
            placeholder="*********"
            name="password"
            value={user.password}
            onChange={(e) => onChangeHandler(e)}
          />

          {/* <div className="user-control">
            <input type="checkbox" className="input-check" />
            <label>Remember Me ?</label>
            <a href="/login" className="forgot-pass">
              Forgot your Password{" "}
            </a>
          </div> */}
          {/* <button
            className="btn-guest md-text"
            onClick={(e) => guestLoginHandler(e)}
          >
            Add Guest Credentials
          </button> */}
          <button className="btn btn-primary">LOGIN</button>
          <p className="new-account text-center">
                        Create New Account
              <MdOutlineArrowForwardIos className="forward-icon" />
         
          </p>
        </form>
      </div>
    </main>
  );
};

export { Login };