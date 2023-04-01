import React, { useState } from 'react';
import './Button.css'
const Button = (props) => {
    console.log(props)
    
    const [change,setChange]=useState(0);
    const incrise =()=>setChange(change+1)
    
    return (
        <div>
            <h5>count : {change}</h5>
            <button className='jony' onClick={incrise}>incrise</button>
            <button className='jony' onClick={Decrise}>Decrise</button>
        </div>
    );
};

export default Button;