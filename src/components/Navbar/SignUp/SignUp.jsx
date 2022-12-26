import React from "react";
import "./SignUp.css";
import find from "../../../img/lapcard.png";
const SignUpForm=({isShowSignUp})=>{
    return(
        <div className={`${!isShowSignUp?"active":""}show`}>
         <div className="signup-form">
          <div className="form-box solid">
            <form>
                <h1 className="login-text">Get Started Now</h1>

                <div className="fieldsSignup">
                    <label> Username</label><br></br>
                    <input type="text" name="username" className="login-box"/><br></br>
                    <label> Phone Number</label><br></br>
                    <input type="text" name="username" className="login-box"/><br></br>
                    <label> CNIC Number</label><br></br>
                    <input type="text" name="username" className="login-box"/><br></br>
                    <label> Password</label><br></br>
                    <input type="text" name="password" className="login-box"/><br></br>
                </div>
                <input type="submit" value="Sign Up" className="login-btn" />
            </form>
            <div className="laptopCard">
            </div>
            <img className="laptop" src={find} alt="" />
          </div>
         </div>
        </div>
    );
}

export default SignUpForm;