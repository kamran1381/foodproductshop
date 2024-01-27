import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
export default function Orders() {
  const { userId } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [OrderIds, setOrderIds] = useState();

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3500/OrdersArray?userId=${userId}`)
        .then(res => res.json())
        .then(userShopDetail => {
          setOrders(userShopDetail)
          const orderIds = userShopDetail.map(order => order.id);
          setOrderIds(orderIds);
        
        })
        .catch(error => console.error('Error fetching orders:', error));
    }
  }, [userId]);

   
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-400 px-3 py-2">Order ID</th>
              <th className="border border-gray-400 px-3 py-2">Order Name</th>
              <th className="border border-gray-400 px-3 py-2">Product Price</th>
              <th className="border border-gray-400 px-3 py-2">Amount</th>
              <th className="border border-gray-400 px-3 py-2">More info</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <>
              <tr key={order.id}>
                <td className="border border-gray-400 px-4 py-2">{order.id}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.state?.cartitems?.map(item => item.title).join(', ') || 'N/A'}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.state?.cartitems?.map(item => item.price).join(', ') || 'N/A'}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {order.state?.cartitems?.map(item => item.quantity).join(', ') || 'N/A'}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <Link to={`${order.id}`}><button className='bg-blue-700 px-2 py-1 text-slate-200'>more info</button></Link>
                </td>
              </tr>
              {console.log(order)}
              </>
            
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
