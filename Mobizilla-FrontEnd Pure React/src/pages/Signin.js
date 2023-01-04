import React from "react";
import "../styles/Contact.css";

function Signin() {
  return (
    <div className="contact center">

      <div className="rightSide">
        <h1>Welcome Back! Sign In To Continue</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="Username">UserName</label>
          <input name="Username" placeholder="Enter your Username..." type="text" />

          <label htmlFor="password">Choose Password</label>
          <input name="password" placeholder="Enter Password..." type="Password" />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
