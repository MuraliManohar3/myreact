import {fireEvent, render,screen} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});


it("should search resList for Eat N Play text input ",async ()=>{
    await act(async ()=>
    render(
        <BrowserRouter> 
           <Body/>
    </BrowserRouter> 
    )
    );
    
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    //assert
    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn   = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"Eat N Play"}});

    fireEvent.click(searchBtn);
    
    const cardsAfterSearch = screen.getAllByTestId("searchInput");
    expect(cardsAfterSearch.length).toBe(1);
});

it("should filter top Rated Restaurants",async ()=>{
    await act(async ()=>{
        render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
        );
    });
    const cardsBeforeFilter= screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);
    
    const topRatedBtn = screen.getByRole("button",{name :"Top rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter= screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(2);
})