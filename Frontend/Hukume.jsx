import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Hukume() {

    const [data , setData] = useState(" ");
    const[search , setSearch] = useState(" ")

    useEffect(()=>{
        fetchedData();
    } , [search])

    const fetchedData = axios.get(" ").then((res)=>{
        setData(res.send);
    }).catch((err)=>{
        console.log((err))
    })

  return (
    <div>

        <input placeholder='search' name = "search" onChange={()=>{setSearch(e.target.value)}}></input>
            {
                data.map((e)=>{
                   return {
                    <div>
                        <p>{e.name}</p>
                    </div>
                   }
                })
            }
    </div>
  )
}

export default Hukume