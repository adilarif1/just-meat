import React from 'react'


const Latlong = props => {


    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
              
        
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
       
        return <h1>Location is: {props.Latlong} </h1>

          
        });
        
      }	

      return <h1>Location is: {props.Latlong} </h1>



}

export default Latlong