import React, { useState, useEffect} from 'react';
import axios from "axios"; 


const Latlong = () => {

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState([]);
  //const [employees, setEmployees] = useState([])
  
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
        
        //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        axios.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=butcher&location=55.8432785,-4.2625404&radius=2000&region=us&type=cafe,bakery&key=YOUR_KEY',{
          headers: {
            
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
          }
         
        }).then((response) => {
          
          console.log(JSON.stringify(response.data));
          setData(JSON.stringify(response.data['results'][0]));
          //setData(response);
        

        });
          
          
        
        }, []);

       
        return <h1>Location is: {data}  </h1>
       
}

export default Latlong;
