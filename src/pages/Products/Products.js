
// import React, { useState, useEffect , useContext , useReducer } from 'react';
// import Productcard from '../ProductCard/Productcard';
// import SearchFilter from '../../Components/Input/searchFilter';
// import { UseProductContext } from '../../context/productcontext';
// import { ProductCartContext } from '../../context/ProductCartContext';
// const initialstate = {
//   price_gte : null ,
//   price_lte : null ,
//   title_like : null
// }


// const ProductReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TITLE_LIKE':
//       return {
//         ...state,
//         title_like: action.payload,
//       };
//     case 'ADD_PRICE_GTE':
//       return {
//         ...state,
//         price_gte: action.payload,
//       };
//     case 'ADD_PRICE_LTE':
//       return {
//         ...state,
//         price_lte: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default function Products() {
//   const [products, setproducts] = useState([]);
//   const [originalProducts, setOriginalProducts] = useState([]);
//   const [categories, setcategories] = useState([]);
//   const [maincategory, setmaincategory] = useState('all');
//   const [state , dispatch] = useReducer(ProductReducer , initialstate)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3500/Products');
//         const data = await response.json();
//         setproducts(data);
//         setOriginalProducts(data); 

        
//         const allCategories = ['all', ...new Set(data.map((item) => item.category))];
//         setcategories(allCategories);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []);

//    useEffect(()=>{
//      let DataUrl ='?'
//       for(const key in state){
//         if(state[key] !== null){
//           DataUrl += `${key}=${state[key]}&`
//         }
//       }
      
//       const FetchNewData = async() =>{
     
//           const response = await fetch(`http://localhost:3500/Products${DataUrl}`)
//           const data = await response.json()
//           setproducts(data);
//           setOriginalProducts(data); 
      
//       }
//       FetchNewData()
//    },[state])
 
    

//   const filterMenus = (category) => {
//     if (category === "all") {
//       setmaincategory(category);
//       setproducts(originalProducts);
//     } else {
//       const filteredProducts = originalProducts.filter((item) => item.category === category);
//       setmaincategory(category);
//       setproducts(filteredProducts);
//     }
//   };



//   return (
//     <>
//     <UseProductContext.Provider value={{state , dispatch}}>  
//      <div>
//         <h2 className='text-center text-3xl mt-4 text-black pt-3 py4 font-bold'>Products section</h2>
//         <div className='product-navbar flex justify-start md:justify-between my-5'>
//           <nav>
//             <ul>
//               <li className='mx-3'>
//               {categories.map((category, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   className='bg-slate-900 text-white py-2 px-3 my-2 mx-3'
//                   onClick={() => {
//                     setmaincategory(category);
//                     filterMenus(category);
//                   }}
//                 >
//                   {category}
//                 </button>
//               ))}
//               </li>
//             </ul>
//           </nav>
//           <SearchFilter/>
//          </div>

//         <div className='product-box-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//           {products.map((item) => (
//             <Productcard key={item.id} {...item} />
//           ))}
//         </div>
//       </div>
   
//      </UseProductContext.Provider>
  
//     </>
//   );
// }




