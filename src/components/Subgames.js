import React, { useEffect } from 'react'
import './Subgame.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import validation from './Validation';

function Subgames() {
 const [values, setValues]=useState({
  Studiosname:'',
  name:'',
  email:'',
  website:'',
  game:'',
 })
const [errors,setError]=useState({})
 function handleChange(e){
  setValues({...values, [e.target.name]: e.target.value})
 }
 function handleSubmit(e){
  e.preventDefault();
  setError(validation(values));
 }
 function submit(e){
  alert('Submitted');
 }

 useEffect(()=>{
  if(Object.keys(errors).length === 0 && (values.name !==""&& values.password !==""))
  alert('Form SUbmitted');
 }, [errors])
  return (
       <div class="u1">
        <div>
        <h4 class="u2">For Developers </h4>
        <h1 class="u3">Submit Games</h1>
        <div class="u4">
        <h4><p id="g1">You are just one step away from submitting your game! Show us your project—fill in the form below, attach your pitch, and let us know what your financial expectations are.</p></h4>
        <h5><p> We can’t wait to get to know your unique game and work with your talented team.

We will contact you as soon as possible to present our idea for the success of your game!</p></h5>
        <h4 className='text-warning font-weight-bold mt-5'><b>TELL US ABOUT YOUR TEAM</b></h4>
        </div><br/><br/><br/>
        <div>

          
          {/* FORM 1ST */}
        <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Studios Name" value={values.name} name="name" onChange={handleChange} />
       {errors.name && <p style={{color:"red",fontSize:"13"}}>{errors.name}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
       <Form.Control type="text" placeholder="Enter your Email"  value={values.email} name="email" onChange={handleChange} />
        {errors.email && <p style={{color:"red",fontSize:"13"}}>{errors.email}</p>}
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>website</Form.Label>
        <Form.Control type="text" placeholder="Password" value={values.website} name="website" onChange={handleChange} />
        {errors.website && <p style={{color:"red",fontSize:"13"}}>{errors.website}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Game Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Game Name" value={values.game} name="game" onChange={handleChange} />
        {errors.game && <p style={{color:"red",fontSize:"13"}}>{errors.game}</p>}
      </Form.Group>
      
       <div >
       <h4>Game build</h4>
       <div>
     Url <input type="radio" name="options" value="option1"/><br/>
     Steam Codes <input type="radio" name="options" value="option2"/>
</div>
      </div>
      
      
       
      <Button  variant="primary" type="submit" >
        Submit
      </Button>
    </Form><br/><br/>
        </div>
       
       
       
      
       {/* FORM 2 */}
        <div class="s1">
           <img src="https://www.allingames.com/wp-content/themes/allin/assets/img/submit-form-icon.png" width="100px"/>
           <h4 className='text-warning font-weight-bold '><b>TELL US ABOUT YOUR GAME</b></h4>
           <div class="container">
 
 <h1>Describe Your Game</h1>
  <textarea class="form-control" rows="5"></textarea><br/>
  <Button clasName='btn-lg ' variant="primary" type="submit" onClick={submit} >
        Submit
      </Button>
 </div>
  
  
        </div>
        </div>
       
    </div>
      
  )
}

export default Subgames