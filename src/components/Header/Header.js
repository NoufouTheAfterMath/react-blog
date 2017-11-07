import React from "react";
import {Adinkra} from "react-adinkra";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (<div className="header-container">
      <div className="header-background"></div>
      <div className="header">
        <h1>My Pet Blog</h1>
        <h3>Woow-Wow
          <Adinkra name={'dwennimmen'}/></h3>
      </div>
    </div>)
  }
}

export default Header;
