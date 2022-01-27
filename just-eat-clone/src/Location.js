import React, { useState, useEffect} from 'react';
import axios from "axios"; 
import ReactDOM from 'react';

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
     
   {data.map((key, index)=>(<li key={index}> <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=100"/>
    
      {index}{key.business_status}{key.formatted_address}{key.user_ratings_total}{key.rating}</li> ))}
     
   </div>
   
   
   );
   
   }

    
   

  

export default Latlong;

