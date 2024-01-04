//IMPORTING NAMED EXPORTS

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btnName,setBtnName]=useState("Login");

    const onlineStatus = useOnlineStatus();
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
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        btnName==="Login"? setBtnName("Logout"): setBtnName("Login");

                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;