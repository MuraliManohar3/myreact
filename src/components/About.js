// import User from "./User"
import UserClass  from "./UserClass";
import React from "react";
import  UserContext from "../utils/UserContext";

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
             <h1>About Class Component</h1>
             <div>
             LoggedIn User
             we can use UserContext.Consumer multiple times
             <UserContext.Consumer> 
                {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
             </UserContext.Consumer>
             </div>
             <h2>This is React</h2>
             <UserClass name={"Murali class component"} location="Vizag "/>
             </div>
        );
        
    }
};

export default About;