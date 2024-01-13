import { Provider } from "react-redux";
import {fireEvent, render,screen} from "@testing-library/react";
import Header from "../header.js";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with a login button",()=>{
     
    render(
        <BrowserRouter>
        <Provider store={appStore}>
              <Header/>
        </Provider>
        </BrowserRouter>
  
    );
    const loginButton = screen.getByRole("button",{name:"Login"});
    // const loginButton = screen.getByText("Login");//not good way

    expect(loginButton).toBeInTheDocument();
    
});

it("Should render Header component with Cart items 0",()=>{
     
    render(
        <BrowserRouter>
        <Provider store={appStore}>
              <Header/>
        </Provider>
        </BrowserRouter>
  
    );
    const cartItems = screen.getByText("Cart (0 items)");
    // const loginButton = screen.getByText("Login");//not good way

    expect(cartItems).toBeInTheDocument();
    
});

it("Should render Header component with a Cart item",()=>{
     
    render(
        <BrowserRouter>
        <Provider store={appStore}>
              <Header/>
        </Provider>
        </BrowserRouter>
  
    );
    const cartItems = screen.getByText(/Cart/);
    // const loginButton = screen.getByText("Login");//not good way

    expect(cartItems).toBeInTheDocument();
    
});

it("Should change Login button to Logout button on click",()=>{
     
    render(
        <BrowserRouter>
        <Provider store={appStore}>
              <Header/>
        </Provider>
        </BrowserRouter>
  
    );
    const loginButton = screen.getByRole("button",{name: "Login"});

    fireEvent.click(loginButton);
    // const loginButton = screen.getByText("Login");// text not good way

    const logoutButton = screen.getByRole("button",{name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
    
});