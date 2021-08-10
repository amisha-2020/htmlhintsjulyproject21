import React, { Component } from 'react'
import './App.css'
import {useState,useEffect} from 'react'
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 100,
  animate: true
};

function App(){
    const[weather,setWeather]=useState([]);
    const[visible,setVisible]=useState(false);

    useEffect(()=>{
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Delhi,in&appid=f9516fc8fc236162043c8d8d1e388dab&units=metric')
    .then(res=>{
    setWeather(res.data);
    setVisible(true);
     })
    },[]);
    return (
        <div className="card col-4 mx-auto bg-image">
        <div className="card-body">
          <h5 className="card-title text-white">{visible && weather.name}</h5>
          <h6 className="card-subtitle mb-2">{visible && weather.sys.country}</h6>
          <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
    />
    <h1 className="text-white">{visible && weather.main.temp}°C</h1>
          
        </div>
        </div>
        );
}
export default App;