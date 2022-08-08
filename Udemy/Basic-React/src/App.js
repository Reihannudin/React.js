import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// with class
class App extends Component {
  constructor() {
    super();

    //  state for define a value
    this.state = {
      name: {firstName : "Andrian" , lastName : "Raihannudin"},
      country : "Indonesia"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, my name is {this.state.name.firstName}  {this.state.name.lastName}, i'm from {this.state.country} </p>
          <button
          // set state for updating UI
            onClick={() => {
              // first function is update value
              this.setState(() => {
                return {
                  name : { firstName :"Kayla" , lastName : "Aurellia"},
                }
              })
              // second function is callback function
              

              // you can do this way
              // this.setState({ name: {firstName : 'Kayla' , lastName : 'Aurellia'} });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

// with function
// function App(){
//   return(
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//         Learn React
//       </a>
//     </header>
//   </div>
//   );
// }

export default App;
