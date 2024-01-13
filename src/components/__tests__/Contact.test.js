import {render, screen} from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

//grouping testcases using 'describe'  ..//test or it
describe("Contact Us Page Test Cases",()=>{


 
//  beforeAll(()=>{
//     console.log("Before All");
//  })
//  beforeEach(()=>{
//     console.log("Before Each");
//  })
//  afterEach(()=>{
//     console.log("after Each");
//  })
//  afterAll(()=>{
//     console.log("after  all");
//  })



it("Should load Contact us component",()=>{

    render(<Contact/>); //rendered onto jsdom

    const heading= screen.getByRole("heading");//finds all headings inside Contact component and stores in this heading component
   
    expect(heading).toBeInTheDocument();
});

it("Should load button inside Contact us component",()=>{

    render(<Contact/>); //rendered onto jsdom

    const button= screen.getByRole("button");//finds all buttons inside Contact component and stores in this heading component
   // roles are defined by jest and the testing library role can be heading ,button 
//    const button =screen.getByText("Submit");
//    const button =screen.getByText("random");
    expect(button).toBeInTheDocument();
});

it("Should load  input name inside Contact us component",()=>{

    render(<Contact/>); //rendered onto jsdom

    const inputName= screen.getByPlaceholderText("name");
   //assertion

    expect(inputName).toBeInTheDocument();
});

it("Should load  2 input boxes on the  Contact us component",()=>{

    render(<Contact/>); //rendered onto jsdom
    //querying
    const inputBoxes =  screen.getAllByRole("textbox"); //we get jsxelement(react element)(react fiber nodes)(VDOM object)
    console.log(inputBoxes.length);
   //assertion
   expect(inputBoxes.length).toBe(2);
//    expect(inputBoxes.length).not.toBe(2);
    // expect(inputBoxes).toBeInTheDocument();
});

});
