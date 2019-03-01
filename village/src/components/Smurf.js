import React from 'react';
import faker from "faker"
import "./smurf.css"
const Smurf = props => {
  return (
    <div className="Smurf individual-card">
          <div className="ui card ">
          <div className="content contentII">
          <div className="extra content">
              <div className="center aligned author">
                <img className="ui avatar image" src={faker.image.avatar()} /> {props.name}
              </div>
          </div>
            
              <div className="center aligned description">
                <p>height: {props.height} cm</p>
                  <p>{props.age} smurf years old</p>
              </div>
          </div>
          
          </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
