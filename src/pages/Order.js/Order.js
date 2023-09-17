import React, { useContext } from "react";
import { ProductCartContext } from "../../context/ProductCartContext";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
export default function Order() {
  const { state, dispatch } = useContext(ProductCartContext);
  const { cartitems, shippingData } = state; 
  const {userId } = useContext(AuthContext)
  const navigate = useNavigate(); 

  const setOrderHandler = async () => {
    try {
        const response = await fetch("http://localhost:3500/OrdersArray", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({state , userId})
        });

        if (response.ok) {
            console.log('success!!!');

            dispatch({ type: "EMPTY_CART" });

            navigate("/account");
        } else {
            const responseData = await response.json(); 
            throw new Error(responseData.error || 'Failed to create order');
        }
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};

  

  return (
    <>
      <div className="flex p-5">
        <div className="basis-[60%]">
          <div className="mt-3">
            <h1>Shipping Data</h1>
            <div className="mt-3 ps-3">
              <div className="py-2">Name = {shippingData.name}</div>
              <hr />
              <div className="py-2">Address = {shippingData.address}</div>
              <hr />
              <div className="py-2">Postal Code = {shippingData.postalCode}</div>
              <hr />
              <div className="py-2">Payment = {shippingData.paymentMethod}</div>
            </div>
            <h1 className="mt-5">Cart Items</h1>
            <div>
              {cartitems.map((item) => (
                <div key={item.id} className="flex p-3 m-3 align-items-center border">
                  <div className="d-flex">
                    <div className="mx-3">image</div>
                    <div className="mx-3">{item.title}</div>
                    <div className="mx-3">{item.price}</div>
                    <div className="mx-3">{item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-[40%]">
          <div className="p-3">
            <button className="btn btn-primary" onClick={setOrderHandler}>
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
