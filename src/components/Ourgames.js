import React from 'react'
import  { useEffect, useState } from 'react'
import Gamecard from './Gamecard';
import Row from 'react-bootstrap/Row';
import './Ourgames.css';

function Ourgames() {
    const [homelist,setHomelist]=useState([])
    const getHome=async()=>{
        await fetch('/games.json')
        .then((data)=>{
            data.json()
            .then((result)=>{
                setHomelist(result.games);
            })
            console.log(homelist);

        })
    }
    useEffect(()=>{
        getHome()
    })
   
   
  return (



    <Row>
        {
           
            
           homelist.map(item=>(
              <Gamecard game={item}/>
              
              // <h1>{item.title}</h1>
          ))   
      
     
    
  }
  
</Row>
   
  )
}

export default Ourgames