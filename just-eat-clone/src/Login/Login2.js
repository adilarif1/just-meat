import React, { useState, useEffect} from 'react';
import axios from "axios"; 


const Latlong = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const URL = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=butcher&location=55.8432785,-4.2625404&radius=2000&region=us&type=cafe,bakery&key=AIzaSyBvKk7o7VYWcNVMigTsM9Hzwmv4rHmLPj0'

  //const [lat, setLat] = useState(0);
  //const [long, setLong] = useState(0);
  const [data, setData] = useState([]);
  const arrayData = [];
   
  useEffect(() => {
    getData()
    
}, [])


    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
              
          // Declare a new state variable, which we'll call "count"
        //setLat(position.coords.latitude)
        //setLong(position.coords.longitude)
        //count = position.coords.latitude;
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
       
        //return <h1>Location is: {lat}  +  {long}</h1>

     
          
        });
        
      }

const getData = async () => {

    const response = await axios.get(URL,{headers: {
            
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
          }})
    //setData(response.data)
    //console.log(data)
    console.log(response.data)
    setData(response.data.results)
    

}



   return( 
   <div>
   {data.map((key, index)=>(<p><img src="https://www.google.com/search?q=butcher&sxsrf=AOaemvKB8NJDOpAOYP6xFPQYqkAnGIv0jA:1635978626469&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi5zo-nn_3zAhWaAWMBHWYdAhgQ_AUoAnoECAIQBA#imgrc=s4QU5XsTjKFR0M" width="100" height="100" alt="Logo" />{index}{key.business_status}{key.formatted_address}{key.user_ratings_total}{key.rating}</p>))}
   </div>
   
   
   );
   
   }

    
   

  

export default Latlong;

