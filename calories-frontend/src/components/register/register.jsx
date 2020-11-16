import React from "react";
import loginImg from "/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/login.svg";
import '/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/style.scss'
export class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base-container" >
                <div className="header">Register</div>
                <div className="content">
                
                    <div className="form">
                    <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email Address</label>
                            <input type="text" name="email" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input type="text" name="mobileNumber" placeholder="Mobile Number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Login
          </button>
                    <button type="button" className="btn">
                        Register
          </button>
                </div>
            </div>
        );
    }
}