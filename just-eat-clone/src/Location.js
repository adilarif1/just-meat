import React, { useState } from 'react';

const Latlong = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
              
          // Declare a new state variable, which we'll call "count"
        setCount(position.coords.latitude)
        setCount2(position.coords.longitude)
        //count = position.coords.latitude;
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
       
        return <h1>Location is: {count} </h1>

          
        });
        
      }

      
      return <h1>Location is: {count} + {count2} </h1>



}

export default Latlong