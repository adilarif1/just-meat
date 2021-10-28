import React, { useState, useEffect } from 'react';
import axios from "axios"; 


const Latlong = () => {

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState("");
  
  
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
              
          // Declare a new state variable, which we'll call "count"
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
        //count = position.coords.latitude;
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
       
        //return <h1>Location is: {lat}  +  {long}</h1>

     
          
        });
        
      }

      useEffect(() => {
        axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR-API').then((Response) => {
          
          setData(Response.data);
        
          });
        
          //return <h1>Location is: {lat}  +  {long}  </h1>
        
        }, []);
      
        return <h1>Location is: {data}</h1>



}

export default Latlong;