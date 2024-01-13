import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu =(resId)=>{
    const [resInfo,setResInfo] = useState(null);
    //fetch data
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data = await fetch(MENU_API+resId);
        const myjson = await data.json();
        setResInfo(myjson.data);
    }
    return resInfo;
}

export default useRestaurantMenu;