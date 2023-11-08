import React, { useState, useEffect , createContext , useReducer } from 'react';

export const ProductReducerContext = createContext()

const initialstate = {
  price_lte : null ,
  title_like : null
}

const reducer = ( state , action) =>{
    switch (action.type) {
        case 'ADD_PRICE_LTE':
          return { ...state, price_lte: action.payload };
        case 'ADD_TITLE_LIKE':
          return { ...state, title_like: action.payload };
        default:
          return state;
      }
}
export default function  ProductReducerContextProvider({children}){
    const [state , dispatch] = useReducer(reducer)
    
    return(
        <ProductReducerContext.Provider value={{state , dispatch}}>
              {children}
        </ProductReducerContext.Provider>
    )
}