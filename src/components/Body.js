import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";

const Body=()=>{
    const [allRestaurants,setallRestaurants]=useState([]);
    const [searchText,setsearchText]= useState("");
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);

    const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.01021590456238&lng=81.79054073989391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json= await data.json();

        console.log(json);
        //optioinal chaining
        const data1 = json?.data?.cards?.filter(
            (rest) => (rest.card?.card?.id === "restaurant_grid_listing")
        );
        const data2 = data1[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // setallRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setallRestaurants(data2);
        setFilteredRestaurant(data2);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }catch(error)
        {
            console.error("Error fetching data:",error);
        }
    };
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) 
    return <h1>Looks like you are offline!!!Please check your internet connnection</h1>

    const {loggedInUser,setUserName} =useContext(UserContext);

    //conditional rendering -rendering on the basis of a condition
    if(!allRestaurants) return null;
    if(filteredRestaurant?.length===0) return <h1>No Restaurant Found</h1>

    return allRestaurants.length===0 ?( <Shimmer/>):
    ( 
      <div className="body">
          <div className="filter flex">
            
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} 
                  onChange={(e)=>{
                  setsearchText(e.target.value);
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={()=>{
                    //filter ther restaurant 
                    // console.log(searchText);
                   const fr= allRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   setFilteredRestaurant(fr);
                }}>Search
                </button>
            </div>
            
            
            <div className="search m-4 p-4 flex items-center"> 
                <label> UserName: </label>
                <input 
                className="border border-black p-2" 
                onChange={(e)=>setUserName(e.target.value)} 
                value={loggedInUser}
                />
            </div>
            </div>

          <div className="flex flex-wrap">
          {
              filteredRestaurant.map((each_restraurant)=>(
              <Link  to={"/restaurants/"+each_restraurant.info.id} key={each_restraurant.info.id}> 
              {
                each_restraurant.info.promoted?<RestaurantCardPromoted/> : <RestaurantCard  resData={each_restraurant}/>
              }
              </Link>
              )
              )
          }
          </div>
      </div>
    );
  };

  export default Body;

//   resturantData.data.cards.filter(
//     (rest) => rest.card?.card?.id === "restaurant_grid_listing"
//   );

