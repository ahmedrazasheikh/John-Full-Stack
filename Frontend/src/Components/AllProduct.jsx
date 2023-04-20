import React from 'react'
import './AllProduct.css'
import Header from './Header/Header'
import './subcription.css'
import caroImage from '../assets/images/banner-img.png'
import axios from "axios";
import { useNavigate , Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Footer from './Footer'
import Pagination from '@mui/material/Pagination';
import BasicPagination from './Pagination'
import Stack from '@mui/material/Stack';
const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)
  const [page , setPage ]  =  useState(1)
  const [numberOfPages , setnumberOfPages ]  =  useState(9)
  const [StarsArray , setStarsArray] = useState([1,2,3])
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/paginatpost?page=${page}`);
      console.log("response: ", response);
      console.log(response.data);
      setnumberOfPages(response.data.pages)
      setLoadProduct(!loadProduct)
      setProducts(response.data.data);
    } catch (error) {
      console.log("Error In Getting All Products ", error);
    }
  };

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
}, [page])




  return (
    <div>
<div className='bg-black  text-white'> Spend $50 for free shipping</div>
      <Header />
      
      <div className='mmqqoop'>

        <div className='iiyytt'>
          <h1 className='fgd mkjbbfss notfillmine'>Subscription</h1> <br />
          {/* <h1  className='fgd mkjbbfss'></h1> */}
          <p className='mkjbbfss awdw notfillmine'>Life shouldn't be so black & white. <br />
            The Brightest flame casts the darkest shadow.</p>
          {/* <button className='iutrvh'>Shop Now!</button> */}
          <Link to={'/SignupForm1'}><button className='iutrvh'>Shop Now!</button></Link> 
        </div>


        <div className='ffmmkklloo'>
          <img src={caroImage} alt="" />
        </div>
      </div>
      <div  className='asfddsfdsfdsmkj'>
{products.map((eachProduct, i) => (   
  <div  key={i}  style={{"width": "17rem"}}   class=" z-50 bhy  w-md rounded overflow-hidden  bg-white  m-5">


  <img class="w-full    h-40" src={eachProduct.imageUrl} alt="Sunset in the mountains"/>

  <div     style={{"alignItems" : "flex-start"}}  class="px-6   flex flex-col justify-start    py-4">
    <div   style={{"fontSize" : "20px"}}  class="font-bold   mb-2">{eachProduct.name}</div>
    <div>

    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
    </div>

    <div class="font-bold  text-cyan-500 text-2xl mb-2">${eachProduct.price}</div>
    <p    class="text-black text-start  font-bold  ">
    {eachProduct.description}
    </p>



  </div>
  <div class="px-6 pt-4 pb-2">
    




  <Link  to={'/Signup3'}  state={{
    name  : eachProduct.name, 
    id : eachProduct._id, 
    price : eachProduct.price , 
    Image :  eachProduct.imageUrl
          }}  >

                <button     style={{"borderRadius":"7px"}}  class="bg-black  w-full hover:bg-red-700 text-white font-bold py-2 px-3    ">
                <i class="fa-solid fa-cart-shopping"></i>   Buy Now  
</button>
          </Link>
          
  </div>
</div>   
)) } 
{/* <BasicPagination/> */}
</div>







<BasicPagination   shape="rounded"       setPage={setPage}   pageNumber={numberOfPages}   />

<Footer/>
        
    </div>
  )
}

export default AllProduct