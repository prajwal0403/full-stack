import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Details=()=>{
    const [data,setData]=useState({});
    const {no}=useParams();
    useEffect(()=>{
      axios.get(`https://apartmanager.herokuapp.com/api/flats/${no}`).then((res)=>{
        setData(res.data)
      })
    },[])
    return(<div>
         <h1>This Is The Details Page</h1>
        <h1>{data.type}</h1>
      </div>
       
    )
}