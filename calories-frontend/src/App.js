import React from "react";
import './App.css';
import { Login } from './components/login/login';
import { Register } from "./components/register/register";
import { Calories } from "./components/calories/calories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }
changeState(){

}
  render() {
  

    return (
      <div className="App">
        <div className="login">
          <div className="container" >
            <Calories  />
          </div>
         
        </div>
      </div>
    );
  }
}


export default App;
