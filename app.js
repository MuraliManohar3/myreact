
    
    // const heading=React.createElement("h1",{id:"heading",xyz: "abc "},"Hello world from react!"  );
    // console.log(heading); //object not element
    // //props are children + attributes we pass

    // const root= ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

    const parent=React.createElement("div",{id:"parent"},
    [
     React.createElement("div",{id:"child1"},
    [
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag")

    ]),
    React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag")

    ]),
    ]
    );
    console.log(parent);
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);