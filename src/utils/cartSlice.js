import { createSlice } from "@reduxjs/toolkit";
//react redux toolkit syntax
const cartSlice = createSlice(
    {
     name : 'cart',
     initialState:
     {
        items:[],
     },
     reducers:
     {
        addItem: (state,action)=>{
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items.pop(); //removing one item from top
        },
        clearCart: (state,action)=>{
            state.items.length=0;
        },
     },
     }
   );


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
