import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home=()=>{
    // return(
    //     <div>
    //         <h1>home</h1>
    //     </div>
    // )
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("https://apartmanager.herokuapp.com/api/flats")
        .then((res) => setData(res.data));
        
    }, []);
    
    return(
        <>
        <h1>Welcome Admin</h1>
        <div>
        {data.map((el) => {
          return (
              
            <Link to={`/flats/${el.no}`} key={el.no}>
                
                <div style={{display:"flex",textAlign:"center"}}>
                    <div><h2>Flat Type :-{el.type}</h2>
                    <h2>Block no :-{el.block}</h2>
                    <h2>Flat no :-{el.no}</h2>
                    <h2>No. of residents :-{el.resident_id.length}</h2>
                    
                    </div>
                    
                    <div style={{marginLeft:"500px"}}><img height="250px" width="300px" src={el.image_url} alt="" /></div>
                </div>
              
            </Link>
          );
        })}
        </div>
        </>
    ) 

}