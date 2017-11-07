import React from "react";
import {Adinkra} from "react-adinkra";
import FontAwesome from "react-fontawesome";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    console.log(this.props);
    return (<div className="footer">
      <div className="container-fluid"  style={{backgroundColor: this.props.color}}>
        <div className="row">
          <div className="col">
            {this.props.social.map((item, index) => {
              return (
                <a href={item.url} key={item.iconName + index}>
                  <FontAwesome name={item.iconName}/>
                </a>
              )
            })}
          <div className="col">
            <p><FontAwesome name={"copyright"}/>Copyright 2018</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
  }
}

export default Footer;
