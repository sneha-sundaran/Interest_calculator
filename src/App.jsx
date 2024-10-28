import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import './App.css'
import { useState } from 'react';


function App() {
  
  
 const[principle,setPrinciple]= useState(0)
 const[interest,setInterest]=useState(0)
 const[year,setYear]=useState(0)
const[simInterest,setSimpleInterest]= useState()


 const [isInvalidState,setIsInvalidState]=useState(false) 
 const [isInvalidRate,setIsInvalidRate]=useState(false) 
 const [isYear,setInvalidYear]=useState(false) 
const validateUserInput=(tag)=>{
const{name,value}=tag
 console.log(name,value);
 console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
 if(!!value.match(/^[0-9]*.?[0-9]+$/))// data valid or not
 {
  if(name=='princiAmount')
  {
    setPrinciple(value)
    setIsInvalidState(false)
  }

  else if(name=='rate'){
    setInterest(value)
    setIsInvalidRate(false)
   }
   else{
    setYear(value)
    setInvalidYear(false)
   }
 }

 else{
  if(name=='princiAmount'){
    setIsInvalidState(true)
  }
  else if(name=='rate'){
    setIsInvalidRate(true)
  }
  else{
   
    setInvalidYear(true)
   }

 }
 
  
}

  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");
    if(principle && interest && year){

      setSimpleInterest(principle*interest*year/100)
    }
    else{
      alert('please enter the values')
    }
    
  }
  const reset=(e)=>{
    e.preventDefault()
    setPrinciple(0)
    setInterest(0)
    setSimpleInterest(0)
    setYear(0)
    setInvalidYear(false)
    setIsInvalidState(false)
    setIsInvalidRate(false)


  } 

  return (
    <>
     <div className="main  d-flex  bg-black" >
      <div className="content">
     <div className='headcontent'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate Your simple interest Easillyy</p>
     </div>
        <div className="amount">
          <h4> <i className="fa-solid fa-indian-rupee-sign"></i> {simInterest}</h4>
          <p>Total simple interst</p>
        </div>
        <form className="mt-5 formfield">


        <div className='mb-3'> 
        <TextField id="outlined-basic" label="Principle Amount" onChange={e=>validateUserInput(e.target)} value={principle || " "} variant="outlined" name='princiAmount' /></div>
        {
          isInvalidState &&
          
          <p className='text-danger'>Invalid data </p>
        }
         
        <div className="mb-3"> <TextField id="outlined-basic" onChange={e=>validateUserInput(e.target)}  value={interest || " "}  label="Rate of Interest" variant="outlined" name='rate' /></div>
        {
          isInvalidRate &&
          
          <p className='text-danger'>Invalid data </p>
        }
        <div className="mb-3"> <TextField id="outlined-basic" label="Time period (yr)"  value={year || " "}  onChange={e=>validateUserInput(e.target)}  variant="outlined" /></div>
        {
           isYear && 
          
           <p className='text-danger'>Invalid data </p>
        }
        <Stack direction="row" spacing={2}>
  <Button onClick={handleCalculate}  id='buttons' type='submit' disabled={isInvalidState ||isInvalidRate ||isYear}> Calculate</Button>
  <Button className='' id='button2' type='submit' onClick={reset}> Reset</Button>

  </Stack>
        </form>
      </div>
     </div>
    </>
  )
}

export default App
