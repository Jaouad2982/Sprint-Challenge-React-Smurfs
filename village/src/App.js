import React, { Component } from 'react';
import {withRouter,Route, NavLink} from "react-router-dom"
import Axios from "axios"
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import Home from "./components/Home"

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

    this.props.history.push("/smurfs")
  }


  deleteInfo = (e,id)=>{
    e.preventDefault();
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res=>{
      console.log(res)
      this.setState ({
        smurfs : res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })

    this.props.history.push("/smurfs")
  }


  render() {
    return (
      <div className="App">
      
            <div class="ui inverted menu">
            <a class="active item">
            <NavLink to="/">Home</NavLink>
            </a>
            <a class="item">
            <NavLink to="/smurfs">smurfs List</NavLink>
            </a>
            <a class="item">
            <NavLink to="/smurf-Form">SmurfForm</NavLink>
            </a>
                   
            </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/smurf-form" render={(props)=><SmurfForm 
                                                addSmurf={this.addSmurf} {...props}
                                                smurfs={this.state.smurfs} />} />
          <Route exact path="/smurfs" render={(props)=> <Smurfs 
                                                        smurfs={this.state.smurfs} 
                                                        {...props} />} />

          <Route path="/smurfs/:id" exact render={(props)=>(<Smurf 
                                                        smurfs={this.state.smurfs}
                                                        deleteInfo={this.deleteInfo} 
                                                        {...props}
                                                        />)} />
      
      </div>
    );
  }
}

export default withRouter(App);
