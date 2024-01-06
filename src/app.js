import React,{lazy,Suspense,useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js" ;
import Body from "./components/Body";
import RestaurantCard  from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// outlet used for 
import Contact from "./components/Contact";
import Error from  "./components/Error";

const Grocery=lazy(()=>import("./components/Grocery"));
//
const Body=()=>{
  return (
    <div className="body">
        <div className="search">Search </div>
        <div className="res-container">
        {
            resList.map((each_restraurant)=>{
            return <RestaurantCard key={each_restraurant.info.id} resData={each_restraurant}/>
})
        }
        </div>
    </div>
  );
};
const AppLayout=()=>{
    const [userName,setUserName] = useState();

    //authentication
    useEffect(()=>{
        //make api call and send username and password
        const data ={
            name:"Murali"
        };
        setUserName(data.name);
    },[]);


    return (
        <UserContext.Provider value={{loggedInUser: userName,setUserName}}> 
        {/* providing new value to the props and providing it to the whole application */}
        <div className="app">
            <Header/>
            <Outlet/>    {/*USING Outlet, children acc to routes come over here*/}
        </div>
        </UserContext.Provider>
            
    );
};
const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
           
        ],
        errorElement: <Error/>,
    },
    
]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
