# HELLO REACT

/**
Header 
   -logo
   -nav items
Body
    -search
    -Restaurant container
       -RestaurantCard   
          -IMG
          -name of the res, star rating, cuisine,
Footer
    -copyright
    -links
    -address
    -contact us          

    **/

TWO TYPES OF EXPORT/IMPORT
1. default export/import
import Component from "path"

2.Named Export/Import(for exporting multiple things)
export const Component;
import {Component} from "path";

//ROUTING TYPES IN WEB APPS
1.client side routing
server side routing

//REDUX TOOLKIT
-Install  @reduxjs/tookit and react-redux
Build our store
Connect our store to our app
Slice(cartSlice)
dispatch(action)
Selector

//TESTING
- UNIT TESTING (imp)
-INTEGRATION TESTING(imp)
- END TO END TESTING(as soon as user lands on the website and we test all flows )

//setting up testing in our app
-Install React Testing library
-Installed jest
-Installed Babel dependencies
-Configure Babel
-Configure Parcel config file to disable Babel transpilation
-Jest Configuration - npx jest --init
-Install jsdom library
-Install @babel/preset-react - to make JSX work in test cases
-Include @babel/preset-react inside my babel config
-Install=>  npm i -D @testing-library/jest-dom
