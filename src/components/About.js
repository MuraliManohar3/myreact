// import User from "./User"
import UserClass  from "./UserClass";
import React from "react";

class About extends React.Component
{
    constructor(props)
    {
        super(props);
        // console.log("parent constructor");
    }
   componentDidMount()
    {
        // console.log("parent componentDidMount");
    }
    render()
    {
        // console.log("parent render");
        return (
            <div>
             <h1>About</h1>
             <h2>This is React</h2>
             <UserClass name={"Murali class component"} location="Vizag "/>
             </div>
        );
        
    }
};

export default About;