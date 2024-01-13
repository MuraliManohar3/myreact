import RestaurantMenu from "../RestaurantMenu"
import {act} from "react-dom/test-utils";
import {fireEvent, render,screen} from "@testing-library/react";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(()=>{
         Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA_NAME),
    })
});



it("should load reastaurant menu component",async ()=>{
    await act(async ()=> render(
        <Provider store={appStore}>
             <RestaurantMenu/>
        </Provider>
           
   ));

    const accordionHeader = screen.getByText("Recommended (4)");
    fireEvent.click(accordionHeader);


});