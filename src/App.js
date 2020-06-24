import React, { Component } from "react";

import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      dropdownView: false
    }
  }
  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
         
          <h4>Start Bootstrap</h4>
          <nav className="Nav-desktop">
            <span className="Nav">SERVICES</span>
            <span className="Nav">PORTFOLIO</span>
            <span className="Nav">ABOUT</span>
            <span className="Nav">TEAM</span>
            <span className="Nav">CONTACT</span>
            </nav>
            <section className='header'>
            <button className="dropdown" onClick={this.toggleDropdown}>Menu</button>
            {this.state.dropdownView
              ? (
                <nav className="Nav-mobile" >
                    <span className="Navtwo">SERVICES</span>
                    <span className="Navtwo">PORTFOLIO</span>
                    <span className="Navtwo">ABOUT</span>
                    <span className="Navtwo">TEAM</span>
                    <span className="Navtwo">CONTACT</span>
                </nav>
              )
              :null}
          </section>
        </header>
        <body className="Main-body">
          <h3>Welcome To Our Studio!</h3>
          <h1>IT'S NICE TO MEET YOU</h1>
          <button className="more-btn">TELL ME MORE</button>
        </body>
      </div>
    );
  }    
}

export default App;
