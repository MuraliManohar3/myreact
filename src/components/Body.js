import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [searchText,setsearchText]= useState("");
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]
        
        );
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.01021590456238&lng=81.79054073989391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json= await data.json();

        console.log(json);
        //optioinal chaining
        setListOfRestaurants(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };
    //conditional rendering -rendering on the basis of a condition

    return listOfRestaurants.length===0 ?( <Shimmer/>):
    ( 
      <div className="body">
          <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} 
                  onChange={(e)=>{
                  setsearchText(e.target.value);
                }}/>
                <button onClick={()=>{
                    //filter ther restaurant 
                    console.log(searchText);
                   const filteredRestaurant= listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={ ()=>{
                const filteredList= listOfRestaurants.filter(res=> res.info.avgRating>4.0);
                setListOfRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
            </div>
           
          <div className="res-container">
          {
              filteredRestaurant.map((each_restraurant)=>(
              <Link  to={"/restaurants/"+each_restraurant.info.id} key={each_restraurant.info.id}> <RestaurantCard  resData={each_restraurant}/></Link>
              )
              )
          }
          </div>
      </div>
    );
  };

  export default Body;

