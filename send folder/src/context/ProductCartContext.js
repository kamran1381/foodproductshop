import { createContext  , useReducer , useEffect} from "react";

export const ProductCartContext = createContext()

const initialState = {
  cartitems: localStorage.getItem("cartitems")
    ? JSON.parse(localStorage.getItem("cartitems"))
    : [],
  shippingData: localStorage.getItem("shippingData")
    ? JSON.parse(localStorage.getItem("shippingData"))
    : {},
};


const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD-TO-ITEM-CART": {
      const existItemIndex = state.cartitems.find(
         (item) =>                           
         item.id === action.payload.id
      );

      const newCartItems =
        existItemIndex 
          ? state.cartitems.map((item) =>
          item.id === existItemIndex.id ? action.payload : item
            )
          : [...state.cartitems, action.payload];

      localStorage.setItem("cartitems", JSON.stringify(newCartItems));

      return {
        ...state,
        cartitems: newCartItems,
      };
    } 

    case 'REMOVE-ITEM' : {
      const DeletedProduct = state.cartitems.filter(item => item.id !== action.payload)
      localStorage.setItem("cartitems", JSON.stringify(DeletedProduct));

      return {
        ...state ,
        cartitems : DeletedProduct
      }

    }

     case 'Increase-Quantity' :{
      const UpdatedItems = state.cartitems.map((item)=>{
        if(item.id === action.payload){
          return{
            ...item ,
            quantity : item.quantity + 1,
          }
        }
        return item;
      })

      localStorage.setItem('cartitems', JSON.stringify(UpdatedItems));

      return {
        ...state,
        cartitems : UpdatedItems
      }
     }

     case 'Deacrease-Quantity' :{
      const UpdatedItems = state.cartitems.map((item)=>{
        if(item.id === action.payload){
          return{
            ...item ,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        }
        return item;
      })

      localStorage.setItem('cartitems', JSON.stringify(UpdatedItems));

      return {
        ...state,
        cartitems : UpdatedItems
      }
     }

     case  'SAVE_SHIPPING_DATA' :{
      localStorage.setItem("shippingData", JSON.stringify(action.payload));

       return{
        ...state ,
        shippingData : action.payload
       }
     }

     case 'EMPTY-CART' : {
      localStorage.removeItem("cartitems")
      localStorage.removeItem("shipingData")
      return {
        cartitems : [],
        shippingData :  {}
   
      }
     }

    default:
      return state;
  }
};


export default function ProductCartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);



  return (
    <ProductCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductCartContext.Provider>
  );
}