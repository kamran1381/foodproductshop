import React, { useContext, useEffect, useState } from "react";
import { ProductCartContext } from "../../context/ProductCartContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function ShippingData() {
  const initialInputValues = {
    name: "",
    address: "",
    postalCode: "",
   paymentMethod : ''
  };
  console.log(initialInputValues.payment)
  const { state, dispatch } = useContext(ProductCartContext);
  const [errors, setErrors] = useState({});
  const { shippingData } = state;

  const [formData, setFormData] = useState(initialInputValues);
  const [isOnline, setIsOnline] = useState(false);
  const [isOffline , setIsOffline] = useState(false)

   const HandleOffline = () =>{
 
    setIsOffline(!isOffline)
    setIsOnline(isOnline)
    setFormData((prev)=>{
      return{
        ...prev ,
        paymentMethod : 'Offline'
      }
    })
  
   }
  const HandleOnline = () =>{
    setIsOnline(!isOnline)
    setIsOffline(isOffline)
    setFormData((prev)=> {
      return {
        ...prev ,
        paymentMethod : 'online'
      }
    })
  }
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validationRules = [
    { field: 'name', message: 'Please Enter Name', pattern: /^[a-zA-Z\s]+$/ },
    { field: 'address', message: 'Please Enter address', pattern: /^[a-zA-Z0-9\s]+$/ },
    { field: 'postalCode', message: 'Please Enter PostalCode', pattern: /^[0-9]+$/ },
  ];

  const saveShippingDataHandler = () => {
    const errors = {};

    validationRules.forEach((rule) => {
      const { field, message, pattern } = rule;
      if (!pattern.test(formData[field])) {
        errors[field] = message;
      }
    });

    


    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      const updatedFormData = { ...formData };
      dispatch({ type: "SAVE_SHIPPING_DATA", payload: updatedFormData });
      navigate("/order");
    }
  };

  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");

  //   if (!userId) {
  //     navigate("/login");
  //   }
  // }, [navigate, shippingData]);

  return (
    <div className="container">
      <div className="text-center my-5">
        <h2>Shipping Data</h2>
        <div className="my-3 flex flex-column">
          <input
            type="text"
            placeholder="Name"
            className="w-[40%] mx-auto border p-2 my-2"
            onChange={handleInputChange}
            value={formData.name}
            name="name"
          />
          <div className="text-red-500">{errors.name}</div>

          <input
            type="text"
            placeholder="Address"
            className="w-[40%] mx-auto border p-2 my-2"
            onChange={handleInputChange}
            value={formData.address}
            name="address"
          />
          {errors.address && <div className="text-red-500">{errors.address}</div>}
          <input
            type="text"
            placeholder="Postal Code"
            className="w-[40%] mx-auto border p-2 my-2"
            onChange={handleInputChange}
            value={formData.postalCode}
            name="postalCode"
          />
          {errors.postalCode && <div className="text-red-500">{errors.postalCode}</div>}
        </div>
        <h2>Payment Method</h2>
        <div className="mt-3 flex justify-center">
          <div className="mx-2 flex items-center">
            <input
              onChange={HandleOnline}
              id="online"
              checked={isOnline}
              value="online"
              type="checkbox"
              name="paymentMethod"
              className="mx-1"
              disabled={isOffline}
            />
            <label className="text-gray-500 text-sm">Online</label>
          </div>
          <div className="mx-2 flex items-center">
            <input
              id="offline"
              onChange={HandleOffline}
              checked={isOffline}
              type="checkbox"
              className="mx-1"
              disabled={isOnline}
            />
            <label className="text-gray-500 text-sm">Offline</label>
          </div>
        </div>
        {errors.paymentMethod && <div className="text-red-500">{errors.paymentMethod}</div>}

        <div className="mt-5">
          <button
            onClick={saveShippingDataHandler}
            className="w-50 p-1 rounded shadow py-2 bg-slate-600 text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
