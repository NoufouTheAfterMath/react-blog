import React from "react";
import "./Content.css";

class Content extends React.Component {
  render() {
    console.log(this.props);
    return (<div className="articles ">
      {this.props.data.map((item, index) => {
        return (
          <div className="Content" key={item.name + index}>
            <div className="container content">
              <div className="c">{item.title}</div>
              <div className="row">
                <div className="col-md-6 offset-3">
                  <img className="img-fluid" src={item.img}/>
                    <h4 className="title">{item.name}</h4>
                    <p className="para">{item.text}</p>
                    <h5 className="author">{item.author}</h5>
                    <p className="date">{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>)
  }
}

export default Content;
