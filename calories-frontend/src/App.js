import React from "react";
import './App.css';
import { Login } from './components/login/login';
import { Register } from "./components/register/register";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }
changeState(){
  const {isLogginActive} =this.state;

}
  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";

    return (
      <div className="App">
        <div className="login">
          <div className="container" >
            {isLogginActive && <Register containerRef={(ref) => this.current = ref} />}
          </div>
         
        </div>
      </div>
    );
  }
}


export default App;
