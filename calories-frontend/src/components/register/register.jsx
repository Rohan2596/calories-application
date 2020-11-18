import React from "react";
import userService from "../../services/user.service";
import '/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/style.scss'
export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            mobileNumber: '',
        }
    }

    onChangeEmail(event) {
        var email = event.target.value
        this.setState({ email: event.target.value })

    }
    onChangePassword(event) {
        this.setState({ password: event.target.value })

    }
    onChangeFirstname(event) {
        this.setState({ firstname: event.target.value })
    }
    onChangeLastName(event) {
        this.setState({ lastname: event.target.value })
    }
    onChangeMobileNumber(event) {
        this.setState({ mobileNumber: event.target.value })
    }


    onLogin() {
        this.props.callbackFromParent("login");
      


    }
    onRegister() {
        this.props.callbackFromParent("register");
      
        let addUserDto={
            "firstName":this.state.firstname,
            "lastName":this.state.lastname,
            "email":this.state.email,
            "mobile":this.state.mobileNumber,
            "password":this.state.password
        
        }
        userService.addUser(addUserDto).then((data)=>{
            console.log(data);
           }).catch((err)=>{
               console.log(err);
           })
    }
    render() {
        return (
            <div className="base-container" >
                <div className="header">Register</div>
                <div className="content">

                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={(event) => this.onChangeFirstname(event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={(event) => this.onChangeLastName(event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email Address</label>
                            <input type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={(event) => this.onChangeEmail(event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input type="text" name="mobileNumber" placeholder="Mobile Number" value={this.state.mobileNumber} onChange={(event) => this.onChangeMobileNumber(event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.onChangePassword(event)} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={this.onLogin.bind(this)}>
                        Login
          </button>
                    <button type="button" className="btn" onClick={this.onRegister.bind(this)}>
                        Register
          </button>
                </div>
            </div>
        );
    }
}