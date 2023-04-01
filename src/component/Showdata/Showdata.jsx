import React, { useState } from 'react';
import  {addtocart, remove } from '../Utilities/Utilities';

import './Showdata.css'
const Showdata = (props) => {
   
    const {id,url,thumbnailUrl,title}=props.data
    
    const arafat = (id)=>{
        addtocart(id)
    }

    const jibon = id =>{
        remove(id)
    }
    
    return (
        <div className='jibon'>
            <h5>id: {id}</h5>
            <h6>tittle: {title}</h6>
            <img src={thumbnailUrl} alt="" />
            <button onClick={()=>arafat(id)}>Parchase</button>
            <button onClick={()=>jibon(id)}>remove</button>
        </div>
    );
};

export default Showdata;