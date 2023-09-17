import React, { useContext, useEffect, useState } from "react";
import { ProductCartContext } from "../../context/ProductCartContext";
import { useNavigate } from "react-router-dom"
export default function Shipping() {
  const { state, dispatch } = useContext(ProductCartContext);
  const { shippingData } = state; 

  const [formData, setFormData] = useState({  
    name: "",
    address: "",
    postalCode: "",
    paymentMethod: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveShippingDataHandler = () => {
    const updatedFormData = { ...formData };
    dispatch({ type: "SAVE_SHIPPING_DATA", payload: updatedFormData });
    navigate("/order");
  
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    
    if (!userId) {
      navigate("/login")
    }
    
  }, [navigate, shippingData]);
  return (
    <div>
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
          <input
            type="text"
            placeholder="Address"
            className="w-[40%] mx-auto border p-2 my-2"
            onChange={handleInputChange}
            value={formData.address}
            name="address"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="w-[40%] mx-auto border p-2 my-2"
            onChange={handleInputChange}
            value={formData.postalCode}
            name="postalCode"
          />
        </div>
        <h2>Payment Method</h2>
        <div className="mt-3 flex justify-center">
          <div className="mx-2 flex items-center">
            <input
              onChange={handleInputChange}
              checked={formData.paymentMethod === "online"}
              value="online"
              type="radio"
              name="paymentMethod"
              className="mx-1"
            />
            <label className="text-gray-500 text-sm">Online</label>
          </div>
          <div className="mx-2 flex items-center">
            <input
              onChange={handleInputChange}
              checked={formData.paymentMethod === "offline"}
              value="offline"
              type="radio"
              name="paymentMethod"
              className="mx-1"
            />
            <label className="text-gray-500 text-sm">Offline</label>
          </div>
        </div>
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
