import React from "react";
import Left from "../assets/Left.jpg";
import "../styles/Contact.css";

function Signup() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Left})` }}
      ></div>
      <div className="rightSide">
        <h1> Sign Up Today!</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="Username">UserName</label>
          <input name="Username" placeholder="Select a Unique Username..." type="text" />

          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />

          <label htmlFor="message">Your Current Device with Description</label>
          <textarea
            rows="6"
            placeholder="Enter Description..."
            name="message"
            required
          ></textarea>

          <label htmlFor="password">Choose Password</label>
          <input name="password" placeholder="Enter Password..." type="Password" />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
