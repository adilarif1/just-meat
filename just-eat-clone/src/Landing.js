import butcher from './butcher.jpg'
import meat from './meat.png'

const Landing = ()=>{


const width = window.innerWidth;
const height = window.innerHeight;

  const style = {
    'position': 'absolute',
    'top': 0, 
    'left': 0,
    'max-width': '100%',
    'min-width': '100%',
    'max-height': '100%',
    'object-fit': 'cover'
  }

  const logo = {
 'position': 'absolute',
    'top': '20px', 
    'left': '10%',
    'height': '50px' ,
    'width' : '50px',
    'z-index': '1'
  }

  const logoText = {

'position': 'absolute',
    'top': '0px', 
    'left': '15%',
    'height': '50px' ,
    'width' : '50px',
    'z-index': '1',
    'color':'olivedrab',

  }
const navbar={
    'z-index': '2',
    'position': 'absolute',
    'top': '20px', 
    'right': '10%',
    'display': 'block',
    'color': '#FFFFFF',
    


    }

    const aref = {
'font-size': '18px',
'text-decoration': 'none',
'color':'#003463'

    }

  const searchBoxOuter = {
    
      'position': 'absolute',
      'top':'40%',
      'left':'0%',
      'margin-left': '25%',
      'height': '250px',
      'width': '600px',
      'border-radius': '15px',
      'background-color':'#f8f8ff',
      'z-index':'1',
      'font-family': 'DejaVu Sans Mono, monospace',
      'color':'darkslategray',
      'box-shadow': '10px 10px 5px black'

  }

  const searchBoxInner ={
    'margin-left': '110px',
    //'display':'flex',
    //'flex-direction':'row',
        'width': '400px',
        'position': 'relative'
  }

  const searchInput = {
        margin: "0px",
        padding: "0px",
        width: "100%",
        outline: "none",
        height: "60px",
        'border-style': 'solid',
       'border-radius': '25px',
       'background-color': 'white',
       'border-color': '#eeeeee',
       'text-align': '10px',
        'padding-left': '10px'

}

  const searchButton = {
         //'flex-grow':'2',
        'position': 'absolute',
        'top': '0px',
        'border-radius': '20px',
        'right': '7px',
        'z-index': '2',
        'border': 'none',
        'top': '5px',
        'height': '50px',
        'width': '100px',
        'cursor': 'pointer',
        'color': 'white',
        'font-style':'bold',
        'background-color': '#003463',
        'transform': 'translateX(2px)'
  }





  return(
      
   <div> 
   <img src={meat} style={logo}/> <h3 style={logoText}>JustMeat</h3>
  <img src={butcher} style={style}/>

<nav style={navbar}><a href="/html/" style={aref}>Log in</a> 
<a href="/css/" style={aref}></a> |
<a href="/css/" style={aref}>Sign up</a> 
<a href="/css/" style={aref}></a> |
<a href="/js/" style={aref}>Help</a> 
</nav>


    <div style={searchBoxOuter}>
         <h2>We Deliver Meat</h2>
<h6>Find a Butcher delivering right now, near you</h6>
         <div style={searchBoxInner}>
         
         <input type="search" placeholder="Enter your postcode" style={searchInput}/>
         <button style={searchButton}>Search</button>
         </div>
         
    </div>
    
    
    
   </div>

 
  )

}

export default Landing;