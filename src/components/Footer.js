import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function Footer() {
  const [sent,setSent]=useState(false)
  const [text,setText]=useState('')

  const handleSend=async()=>{
    setSent(true)
    try{
      await axios.post("http://localhost:4000/send_mail",{
        text
      })
    }catch (error){
     console.log(error)
    }
  }
  return (
    <div>
      {!sent ? (
        <form onSubmit={handleSend}>
          <h4>Enter your Email and join our Game Community</h4>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button type="submit">JOIN</button>
        </form> 
      ):(
        <h4 className='text-success'>Thank you, your join request was successful! Please check your email inbox to confirm.</h4>
      )}
         
    </div>
  )
}

export default Footer