import React from 'react'
import { useState ,useEffect } from 'react'
import { Await } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    // const [mydata, setmydata] = useState([])
    // useEffect(() => {
    //    fetch('https://api.github.com/users/codescirahul')
    //    .then(Response => Response.json())
    //    .then(data=> {
    //      setmydata(data);
    //    })
      
    
    // }, [])
    const mydata=useLoaderData();
    
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <h1>Userid: {mydata.login}</h1>
      
            <img src={mydata.avatar_url} alt="sorry!" className='rounded-full ' />
            <h3 className='my-auto'>Name: {mydata.name}</h3>
            <h3>Followes: {mydata.followers}</h3>
    </div>
  )
}

export default Github

export const githubinfoloader = async()=>{
    let response = await fetch('https://api.github.com/users/codescirahul');
    return  response.json()
}