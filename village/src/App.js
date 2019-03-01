import React, { Component } from 'react';
import {Route, NavLink} from "react-router-dom"
import Axios from "axios"
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  //this is it

  componentDidMount = ()=>{
    Axios.get("http://localhost:3333/smurfs")
    .then(res=>{
      console.log(res)
      this.setState({
        smurfs : res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

   
  addSmurf = (event,info) => {
    event.preventDefault();
    // add code to create the smurf using the api
    Axios.post("http://localhost:3333/smurfs",info)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }


  render() {
    return (
      <div className="App">
      <nav>
          <NavLink to="/">smurfs List</NavLink>
          <NavLink to="/smurf-Form">SmurfForm</NavLink>
      </nav>
      <Route exact path="/smurf-form" render={(props)=><SmurfForm 
                                            addSmurf={this.addSmurf} {...props}
                                            smurfs={this.state.smurfs} />} />
      <Route exact path="/" render={(props)=> <Smurfs 
                                                    smurfs={this.state.smurfs} 
                                                    {...props} />} />
      
      </div>
    );
  }
}

export default App;
