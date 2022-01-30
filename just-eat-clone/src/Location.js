import React, { useState, useEffect} from 'react';
import axios from "axios"; 
import ReactDOM from 'react';

const Latlong = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  //const URL = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=butcher&location=55.8432785,-4.2625404&radius=2000&region=us&type=cafe,bakery&key=AIzaSyBvKk7o7VYWcNVMigTsM9Hzwmv4rHmLPj0'

  //const [lat, setLat] = useState(0);
  //const [long, setLong] = useState(0);
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  const arrayData = [];
   
  useEffect(() => {
    getData()
    
}, [])


    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
              
          URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=butcher&location=${position.coords.latitude},${position.coords.longitude}&radius=2000&region=us&type=cafe,bakery&key=`
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
    setCity(response.data.results[0].plus_code.compound_code);
    console.log(response.data.results[0].plus_code.compound_code)
    console.log(response.data)
    setData(response.data.results)
    

}



   return( 
    <div class="flex-container">
        <div class="cat">
        <img id="catImg"src="beef.jpeg" width="70%" height="80px" alt="image" />
        
      </div>
  
  
      <div class="cat">
        <img id="catImg" src="lamb.jpeg" width="70%" height="80px" alt="image" />
        
      </div>
      
  
      <div class="cat">
        <img img="catImg"src="chicken.jpeg" width="70%" height="80px" alt="image" />
        
      </div>
      
  
      <div class="cat">
        <img img="catImg"src="fish.jpeg" width="70%" height="80px" alt="image" />
       
      </div>
  
      <div class="tags is-success">
        <span class="tag is-large is-success" href="">Chops</span>
        <span class="tag is-large is-success" href="">Ribs</span>
        <span class="tag is-large is-success" href="">Steak</span>
        <span class="tag is-large is-success" href="">Organs</span>
        <span class="tag is-large is-success" href="">Breasts</span>
        <span class="tag is-large is-success"href="">Shoulder</span>
        <span class="tag is-large is-success" href="">Leg</span>
      </div>
      
      <input id="searchMeat"   class="input is-rounded" type="text" placeholder="Search for a butcher near you"/>
      
      <div class="flex-child">
  
      <nav id="navpanel" class="panel">
        <p class="panel-heading">
          Offers
        </p>
        <nav class="panel">
        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Special Offers
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Free Delivery
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Low Delivery Fees
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          2 for 1
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          Collection
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          5 Stars
        </a>
      </nav>
      </nav>
      <div class="box">
      <img img="catImg"src="map.png" alt="image" />{city}
      </div>
    </div>

    <div>
     
     {data.map((key, index)=>(<li key={index}> <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=100"/>
      
        {index}{key.business_status + "/n"}{key.formatted_address + "/n"}{key.user_ratings_total + "/n"}{key.rating + "/n"}</li> ))}
       
     </div>

    </div>
 
   
   
   );
   
   }

    
   

  

export default Latlong;

  