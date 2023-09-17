
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function OrderDetial() {
  const [Orders, setOrders] = useState({});
  const { orderId } = useParams();
 console.log(orderId)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3500/OrdersArray/${orderId}`);
        const OrderData = await response.json();
        setOrders(OrderData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

 
  return (
    <div>
      <h1>{Orders?.state?.shippingData?.name}</h1>
    </div>
  );
}
