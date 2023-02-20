import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';


import './Home.css';
function Home() {
    
   
  return (

    
    <div>
        <Carousel>
<Carousel.Item interval={2}>
  <img
    className="d-block w-100"
    src="https://i.ytimg.com/vi/LZVQXLkHdYo/maxresdefault.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h1 className='text-dark'><b>All About Games</b></h1>
    
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={10}>
  <img
    className="d-block w-100"
    src="https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg"
    alt="Second slide"
  />
  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/11E3/production/_113897540_halo_infinite_keyart_primary_horiz.jpg"
    alt="Third slide"
  />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
<div class='a1'>
    <h3 class='b1'>Our Games</h3>
    <h1 id='b2'>GAME M<i class="fa-solid fa-power-off"></i>DE ACTIVATED</h1>
    <p class="hi"><h4>Play Games Everyday.Always be a winner. We Create Engaging Experiance of Every Kind Of Players</h4></p>
</div>
<div class="c1">
  <div class="c2">
  
  </div>
  <div class="c3">

  </div>
  <div class="c4">

  </div>
  <div class="c5">
    <h3 className='text-center'>About Us</h3>
      <p>We are a team of passionate specialists with an extensive knowledge of the video game industry. Our task is to make sure that players will be able to enjoy unique and unforgettable games. We're not just a game company - we're your game partner!</p>
      <p>Click Below To know More About Our Team</p>
      <a href="https://twitter.com/Dave_Conner" class="btn btn-2">Click Here</a> 
  </div>
  
</div>
</div>   
   
  )
}



export default Home