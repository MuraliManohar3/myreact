import React from "react";
import  ReactDOM from "react-dom/client";

// const jsxHeading = (<h1 className="head" tabIndex="5">React using JSX</h1>);
// console.log(jsxHeading);
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
// ● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//     div with class “title”)
//     ○ Create the same element using JSX
//     ○ Create a functional component of the same with JSX
//     ○ Pass attributes into the tag in JSX
//     ○ Composition of Component(Add a component inside another)
//     ○ {TitleComponent} vs {<TitleComponent/>} vs
//     {<TitleComponent></TitleComponent>} in JSX
// const header= React.createElement("div",{id:"divid"},
//         React.createElement("h1",{id:"h1i"}, 
//         React.createElement("h2",{id:"h2i"},
//         React.createElement("h3",{id:"h3i"}
//   )
//   )
// )
// );
const Head3=()=>{
    return (<h3 id="h3i">H1 HERE</h3>);
}; 
const jsxHeading=(<div id="divid">
    <h1 id="h1i"> 
        <h2 id="h2i"> <Head3/> H2 HERE</h2>  
          H3 HERE
          </h1>
</div>);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);


























    // const heading=React.createElement("h1",{id:"heading",xyz: "abc "},"Hello world from react!"  );
    // console.log(heading); //object not element
    // //props are children + attributes we pass

    // const root= ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

    // const parent=React.createElement("div",{id:"parent"},
    // [
    //  React.createElement("div",{id:"child1"},
    // [
    //     React.createElement("h1",{},"namaste react "),
    //     React.createElement("h2",{},"h2 tag")

    // ]),
    // React.createElement("div",{id:"child2"},
    // [
    //     React.createElement("h1",{},"h1 tag"),
    //     React.createElement("h2",{},"h2 tag")

    // ]),
    // ]
    // );
    // console.log(parent);
    // const root= ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parent);