// import React,{useContext} from 'react';
// import { Link } from 'react-router-dom';
// import { ProductCartContext } from '../../context/ProductCartContext';
// export default function Productcard({ id , title, price, Description, img }) {
     
//    const {state , dispatch} = useContext(ProductCartContext)
//    const productProperties ={id, title, price, Description, img};
//    const addTocartHandler = (productproprtyinfo) =>{
//       let itemexists = state.cartitems.find((item)=> item.id === productproprtyinfo.id)
//       let cartItem;
//       itemexists ? cartItem = { ...productproprtyinfo , quantity: itemexists.quantity + 1 } : cartItem = { ...productproprtyinfo , quantity: 1 };
      
//       dispatch({type : 'ADD-TO-ITEM-CART' , payload : cartItem })
    
//    }


//   return (
//      <>
//       <div className='max-w-sm rounded overflow-hidden shadow-lg'>
//       <Link to={`/product/${id}`}><button className='inline-flex items-center px-3 py-2 mt-6 text-sm font-medium text-center text-white bg-blue-950 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Product Details</button></Link>
//       <img className='w-full h-48' src={img} alt='Sunset in the mountains' />
//       <div className='px-6 py-4 text-left'>
//         <div className='font-bold text-xl mb-2'>{title}</div>
//         <p className='text-gray-700 text-base'>{Description}</p>
//         <p className='text-gray-700 text-base py-3'>{price}</p>
//         <Link to='/cart'>
//         <a className='inline-flex items-center px-3 py-2 mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={()=>addTocartHandler(productProperties)} >
//           Add to cart
//         </a>
//         </Link>
//       </div>
//     </div>
//      </>


     
     
    
//   );
// }
import React from 'react';

export default function ProductCard({ title, price, img, category }) {
  return (
    <div className="mx-2 mb-4 shadow-lg">
      <div className="bg-white border rounded-lg overflow-hidden">
        <img src={img} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">${price}</p>
          <span>{category}</span>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

