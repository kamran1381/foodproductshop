import React, { useContext } from 'react';
import { ProductCartContext } from '../../context/ProductCartContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
export default function Cart() {
  const { state, dispatch } = useContext(ProductCartContext);
   let navigate = useNavigate()
  const FinalPrice = state.cartitems.reduce((pre, cur) => pre + cur.price * cur.quantity, 0);

  const removehandler = (id) => {
    dispatch({ type: 'REMOVE-ITEM', payload: id });
  };

  const IncreaseQaunitity = (id) => {
   dispatch({type : 'Increase-Quantity' , payload : id})
  }
  const DecreaseQaunitity = (id) => {
    dispatch({type : 'Deacrease-Quantity' , payload : id})

  }

  // const handlecontinue  = () =>{
  //   let {UserId} = state 
  //   if(UserId){
  //     navigate('/shippingData')
  //   }else{
  //     navigate('/login')
  //   }
  // }
  


  return (
    <>
      <div className="flex">
        <div className="w-3/4">
          {state.cartitems.length ? (
            state.cartitems.map((item, index) => (

              <div key={item.id} className="flex justify-between p-3 shadow m-3 rounded items-center">
                {console.log(item)}
                <div className="flex items-center">
                  <div className="w-12 h-12 mx-3 bg-gray-300 rounded-full">
                    <img src={item.img} />
                  </div>
                  <div className="mx-3">{item.title}</div>
                  <div className="mx-3">${item.price}</div>
                  <div className="mx-3">
                  <button className='bg-blue-500 mx-3 py-1 px-3' onClick={()=> IncreaseQaunitity(item.id)}>+</button>
                  {item.quantity}
                  <button className='bg-blue-500 mx-3 py-1 px-3'onClick={()=> DecreaseQaunitity(item.id)}>-</button>
                  </div>
                </div>
               
                <div>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => removehandler(item.id)} 
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-red-100 text-red-500 p-3 shadow m-3 rounded">No Item</div>
          )}
        </div>
        <div className="w-1/4">
          <div className="mt-3">
            <div className="mb-2">Total Price = ${FinalPrice} </div>
            <div>
             <Link to='/shippingData'><button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">Continue</button></Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
