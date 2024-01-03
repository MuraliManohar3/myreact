import React from "react";

//creating class based components
class UserClass extends React.Component
{
    constructor(props)
    {
        // Without calling super(props) in the constructor, this.props would be undefined in the constructor and any attempt to access it would result in errors.
        //In the case of React components, you pass props to super(props) to make this.props available in the constructor. This is necessary because this.props is not available until after super(props) is called.
        super(props);
        this.state={
            userInfo: {
                login: "Default",
                location: "default",
            }
        };
        // console.log("child constructor");
    }
    async componentDidMount()
    {
        // console.log("child componentDidMount");
        const data= await fetch("https://api.github.com/users/MuraliManohar3");
        const json =await data.json();
        // console.log(json);
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
    componentDidUpdate()
    {
        console.log("component did update");
    }
    componentWillUnmount()
    {
        console.log("Component will unmount"); 
    }
    render() //returns a piece of jsx
    {
        // console.log("child render");
        // const {name,location}= this.props;
        const {login,location,avatar_url}= this.state.userInfo;
        return (
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {login}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: murali76811@gmail.com</h4>
        </div>
    );
    }
    
};
//loading a class based component onto the webpage means creating an instance of that class
export default UserClass;

