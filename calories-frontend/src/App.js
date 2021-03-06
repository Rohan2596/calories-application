import React from "react";
import './App.css';
import { Login } from './components/login/login';
import { Register } from "./components/register/register";
import { Calories } from "./components/calories/calories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActivePage: true,
      isCaloriesPage: false,
    }
  }

  myCallback = (data) => {
    if (data === "login") {
      this.setState({ isActivePage: true })
    }
    if (data === "register") {
      this.setState({ isActivePage: false })
    }
    if (data === "calories") {
      this.setState({ isCaloriesPage: true })
    }

  }
  render() {

    const components = () => {
      if (this.state.isActivePage) {
        if (this.state.isCaloriesPage) {
          return <Calories callbackFromParent={this.myCallback} />
        }
        return <Login callbackFromParent={this.myCallback} />
      }
      if (!this.state.isActivePage) {
        return <Register callbackFromParent={this.myCallback} />
      }
      // if(localStorage.getItem("userId")){
      //          return <Calories callbackFromParent={this.myCallback} />
        
      // }

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
