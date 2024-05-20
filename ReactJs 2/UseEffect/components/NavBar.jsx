import React,{useEffect} from "react";
const NavBar=({color})=>{
     // Case 1: Run on every render
    useEffect(()=>{
        alert("Hey I will run on every render")
    })
    // Case 2: Run only on first render
    useEffect(()=>{
        alert("Hey Welcome to my Page.This is my first render")
    },[])
    // Case 3: Run only certain values change
    useEffect(()=>{
        alert("Hey I am running because color was changed")
    },[color])
    // Example of cleanup function
    useEffect(()=>{
        alert("Hey welcome to my page.This is the first render of app.jsx")
        return ()=>{
            alert("component was unmounted");
        }
    },[])
    return(
        <div>
            I am NavBar of {color} color..
        </div>
    )
}
export default NavBar;