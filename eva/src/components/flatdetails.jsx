import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Details=()=>{
    const [data,setData]=useState({});
    const {id}=useParams();
    useEffect(()=>{
      axios.get(`https://apartmanager.herokuapp.com/api/flats/${id}`).then((res)=>{
        setData(res.data)
      })
    },[])
    return(<div>
         <h1>This Is The Details Page</h1>
        <h1>{data.no}</h1>
      </div>
       
    )
}