import React, { useRef, useState } from 'react'
import Print from '../print/Print';

const Form = ({user, setUser}) => {
    const [isSubmit, setIsSubmit] = useState (false);
    const handleChange =(e)=>
    {
        const{placeholder,value} = e.target
        setUser({...user, [placeholder]:value})
        console.log(user);
    }

const handleSubmit =(e)=>{
    e.preventDefault()
    setIsSubmit(!isSubmit);
}


  return (
    <>
    <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type="Text" placeholder='firstName'/>
        <br/>
        <input type="Text" placeholder='lastName'/>
        <br/>
        <input type="number" placeholder='age'/>
        <br/>
        <br/>
        <br/>
        <input type="submit" value="display / Hide" />
        
    </form>

    {   
        isSubmit?
        (<Print user={user}/>):
        (<div><p>click the submit button to display/hide the input values</p></div>)
    }
    </>  
    )
}

export default Form