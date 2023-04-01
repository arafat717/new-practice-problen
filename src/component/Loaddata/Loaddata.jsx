import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Showdata from '../Showdata/Showdata';
import './Loaddata.css'
const Loaddata = () => {
    const [datas,setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(datas=>setData(datas))
    },[])
    return (
        <div>
            <h1>TOTTAL DATA: {datas.length}</h1>
           <div className='arafat'>
           {
                datas.map(data=><Showdata
                data={data}
                key={data.id}
                ></Showdata>)
            }
           </div>
        </div>
    );
};

export default Loaddata;