import { useState,useEffect } from "react";
const User=({name})=>{
    const [count]=useState(0);
    const [count2]= useState(1);

   useEffect(()=>
    {
        //api class
        const data=  fetch("https://api.github.com/users/MuraliManohar3");
        const json = data.json();
        console.log(json);
    },[]);

    return (<div className="user-card">
        <h1>Count={count}</h1>
        <h1>Count={count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Vizag</h3>
        <h4>Contact: murali76811@gmail.com</h4>
        
    </div>
    );
};

export default User;