import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (<div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand" style={{color: this.props.color}} href="#">{this.props.brand}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      {this.props.links.map((item, index) => {
        return (
          <a className="nav-item nav-link" key={item.name + index} href={item.local}>
           {item.name}
          </a>
        )
      })}
    </div>
  </div>
</nav>
    </div>)
  }
}

export default Navbar;
