import { useEffect, useState } from 'react'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github(){
    const data=useLoaderData();
    // const [data,setData]=useState("");
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/hiteshchoudhary')
    //      .then(response=>response.json())
    //      .then(data=>{
    //         setData(data);
    //      })
    // },[])

    return(
        <>
         <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers}</div>
         <img className='mx-auto mb-5' src={data.avatar_url} alt='GitPicture'/>
        </>
    )
}

export const GithubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}