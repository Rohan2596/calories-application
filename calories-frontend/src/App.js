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
    }
  }
  changeState() {

  }
  render() {

    const components = () => {
        return <Login change="login" />
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
