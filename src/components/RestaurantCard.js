//named export below 
import { CDN_URL } from "../utils/constants";
import { useContext  } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard=(props)=>{
    const { resData }=props;

 
    const {loggedInUser}= useContext(UserContext);


    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime}= resData?.info;
    return (
        <div  data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" alt="murali"src=
            {
               CDN_URL +cloudinaryImageId
                }  />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> {avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
            {/* <h4>User :{loggedInUser}</h4> */}
        </div>
    );
};

//higher order components -take a component and returns a new component
//input- RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;