import React from "react";
import loginImg from "/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/login.svg";
import '/home/admin1/Desktop/BackEndProjects/calories-application/calories-frontend/src/components/style.scss'
import userService from "../../services/user.service";
export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }

    }

    onChangeEmail(event) {
        var email = event.target.value
        this.setState({ email: event.target.value })

    }
    onChangePassword(event){
        this.setState({ password: event.target.value })

    }

    onLogin() {
       this.props.callbackFromParent("login");
       console.log("email:-",this.state.email);
       console.log("password:-", this.state.password);
       if(this.state.email.length>0&&this.state.password.length>0){
           console.log("dfsfs");
           this.props.callbackFromParent("calories")
       }
       const authDto={
        "email":this.state.email,
        "password":this.state.password
       }
       userService.authUser(authDto).then((data)=>{
        console.log(data);
       }).catch((err)=>{
           console.log(err);
       })
        
    }
    onRegister() {
        this.props.callbackFromParent("register");
      
    }
    render() {
        return (
            <div className="base-container"  >
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email Address</label>
                            <input type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={(event) => this.onChangeEmail(event)} />
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