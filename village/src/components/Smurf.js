import React from 'react';
import faker from "faker"
import "./smurf.css"
import App from '../App';

class Smurf extends React.Component{
 constructor(props){
   super(props);
   this.state = { list : [] }
 }
 
 componentDidMount =()=>{
   this.setState({
     list : this.props.smurfs
   })
 }


render(){
  console.log(this.state.list);
  let smurf = this.state.list.find(p=> `${p.id}` === this.props.match.params.id);
  console.log(smurf);
  if(!smurf){
    return <div>Data not found</div>
  }
  return (
    <div className="Smurf individual-card">
          <div className="ui card ">
          <div className="content contentII">
          <div className="extra content">
              <div className="center aligned author">
                <img className="ui avatar image" src={faker.image.avatar()} alt={smurf.name} /> {smurf.name}
              </div>
          </div>
            
              <div className="center aligned description">
                <p>height: {smurf.height} cm</p>
                  <p>{smurf.age} smurf years old</p>
              </div>
          </div>
          <button onClick={e=>{this.props.deleteInfo(e,smurf.id)}} class="ui button">
                      Delete
                    </button>
          </div>
    </div>
  );
}
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
