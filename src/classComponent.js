import React, { Component } from 'react'
import './App.css'
import Test from './Test'
class App extends Component {
  state = { 
    city:'Robertsganj',
    temp:0,
    country:'IN',
    visible:false
   }
   componentDidMount(){
     fetch('https://api.openweathermap.org/data/2.5/weather?q=Delhi,in&appid=f9516fc8fc236162043c8d8d1e388dab&units=metric')
     .then((response)=>response.json())
     .then((data)=>{
     console.log(data);
     this.setState({city:data.name, temp:data.main.temp, country:data.sys.country,visible:true})
     })
   }
  render() {
    
    return (

    <div className="card col-4 mx-auto bg-image">
    <div className="card-body">
      <h5 className="card-title text-white">{this.state.visible ? this.state.city:'Loading...'}</h5>
      <Test country={this.state.country}/>
      <h1 className="text-white">{this.state.temp}°C</h1>
    </div>
    </div>
    );
  }
}

export default App;
