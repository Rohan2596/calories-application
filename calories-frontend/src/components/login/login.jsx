import React from "react";
import loginImg from "/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/login.svg";
import '/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/style.scss'
export class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email Address</label>
                            <input type="text" name="email" placeholder="Email Address" />
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
                </div>
            </div>
        );
    }
}