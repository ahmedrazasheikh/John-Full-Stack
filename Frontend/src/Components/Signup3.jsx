import React from 'react'
import SelectAutoWidth from'../Components/Dropdown.jsx'
import shirt from '../assets/images/6.png'
import trouser from '../assets/images/7.png'
import './Signup3.css'
import './SignupForm2.css'
import { Link , useLocation } from "react-router-dom";
const Signup3 = () => {
  const loacation = useLocation()
      const id =  loacation.state.id
      const name =  loacation.state.name
      const price =   loacation.state.price
      const  image =    loacation.state.Image
  return (
    <div>

<div className='ceterthediv' >
<div  className='toponessssmko'>
<div>
2 of 3
</div>



<div>
    <h1  style={{"fontSize" : "2rem"}}  >What sizes best represents you?</h1>
    <h3 style={{"fontSize" : "1.4rem"  }} >We'll show you what we have in stock that fits you</h3>


<div    style={{"margin" : "40px 0px"}}  className='flexceryj'>

<div   className='mkoijnbg'>
        
        <img   width={'70px'}   height={'70px'} src={loacation.state.Image} alt="" />
        <h6>Top Size:</h6>
        <div  className='mkoiuyt'>
    <SelectAutoWidth   image = {loacation.state.Image}  />
    </div>
    </div>
   


</div>
  
</div>
<div>

<div  className='nouijnvf'>
  <h1  style={{"fontSize" : "2rem"}}>Some quick details</h1>
  <h3 style={{"fontSize" : "1rem"  ,   "marginBottom": "30px" }}>This information helps us to personalize your</h3>
</div>



<div   className='vbnhgtrr'>
  <input type="text"  placeholder='Zip Code '  className='bhuytfv'  name="" id="" />
  <input type="text" placeholder='How did you hear About us ' className='bhuytfv' name="" id="" />
</div>

<div>
{/* <Link to={'/Login'}><button  className='VButoontherS'>Previous</button></Link> */}
<Link to={'/AddtoCard'}       state={{
            name : name , 
            id : id, 
            price : price , 
            Image   :  image,
          }}><button  className='VButoontherS'>Next Step</button></Link></div>


</div>
</div>
    </div>
    </div>
  )
}

export default Signup3