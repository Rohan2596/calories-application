import React from "react";
import './App.css';
import { Login } from './components/login/login';
import { Register } from "./components/register/register";
import { Calories } from "./components/calories/calories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: this.props.isLogin,
    }
  }
changeState(){

}
  render() { 
  console.log("App JS",this.props.isLogin);
    let {isLoggedIn} = this.state.isLogginActive;
    const components = ()=>{
      if(isLoggedIn){
        return <Login />
      } else{
        return <Register/>
      }
    }
    return (
      <div className="App">
        <div className="login">
          <div className="container" >
        
          {components()}

          </div>
         
        </div>
      </div>
    );
  }
}


export default App;
