//IMPORTING NAMED EXPORTS

import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{
    const [btnName,setBtnName]=useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    
    // console.log(loggedInUser);

// subscribing to the store using  a Selector
//useSelector() hook gives us access to the store
const cartItems= useSelector((store)=>store.cart.items);
// console.log(cartItems);


    return (
        <div className="flex justify-between bg-cyan-600 shadow-lg sm: bg-yellow-50 lg: bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} alt="murali"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4"> 
                    <li className="px-4">
                        Online Status: {onlineStatus? "🟢":"🔴"}
                    </li>
                    <li className="px-4">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4"> 
                        <Link to="/contact"> Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery"> Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart ({cartItems.length} items)
                        </Link>
                    </li>
                    <button className="login" onClick={()=>{
                        btnName==="Login"? setBtnName("Logout"): setBtnName("Login");

                    }}>{btnName}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;