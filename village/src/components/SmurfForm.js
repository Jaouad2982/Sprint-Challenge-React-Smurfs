import React, { Component } from 'react';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info : {
      name: '',
      age: '',
      height: ''
      }
    };
  }


  handleInputChange = (e)=>{
    e.persist();
  this.setState(prevState => (
      {
      info: {
        ...prevState.info,
        [e.target.name]: e.target.value
      }
    }));
  }


  addSmurfs = e =>{
    this.setState({
        info : {
            name : "",
            age :"",
            height:""
        }
    })
    this.props.addSmurf(e,this.state.info)
    window.location.reload();
}
  render() {
    return (
      <div className="SmurfForm">
      <form onSubmit={this.addSmurfs}>
      <div class="ui inverted segment">
      <div class="ui inverted form">
        <div class="two fields">
          <div class="field">
            <label> Name</label>
            <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.info.name}
            name="name"
          />
          </div>
          <div class="field">
            <label>Age</label>
            <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.info.age}
            name="age"
          />
          </div>
          <div class="field">
          <label>Height</label>
          <input
          onChange={this.handleInputChange}
          placeholder="height"
          value={this.state.info.height}
          name="height"
        />
        </div>
        </div>
      </div>
      <button class="ui submit button" type="submit" >Add to The village</button>
    </div>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
