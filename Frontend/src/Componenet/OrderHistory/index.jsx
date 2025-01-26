import React, { useEffect,useState } from "react";
import { FaShoppingCart, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axiosInstance from "../../services/axiosInstance";
import { useUser } from "../../services/UserContext";
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {


   const {user,loading}=useUser();

  const [orders, setOrders] = useState([]); 

const navigate=useNavigate()

  useEffect(() => {
    if (!loading && !user) {
      navigate('/error');  // Correct navigation after component mounts and user is not found
    }
  }, [loading, user, navigate]);  // Add dependencies to run the effect when loading or user changes



  const fetchallorders=()=>{


  axiosInstance.get(`/fetchallorders/${user.id}`)
  .then((res) => {
    console.log(res.data); 
    setOrders(res.data.orders); 
  })
  .catch((err) => {
    console.error("Error fetching orders:", err);
  });
}
useEffect(() => {
  if (!loading && user?.id) {
    fetchallorders();
  }
}, [user, loading]);


  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Order History
        </h2>

        <div className="space-y-6">
          {orders.map((order) => (

            <a href={`/product-detail/${order.product_id}`}>
            <div
              key={order.order_id}
              className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center"
            >
              {/* Order Details */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Order #{order.product_name}</h3>
                <p className="text-gray-600">Date: {order.order_date}</p>
                <p className="text-gray-600">Total: ${order.total_price}</p>
              </div>

              {/* Order Status */}
              <div
                className={`flex items-center ${
                  order.status === "Delivered"
                    ? "text-green-500"
                    : order.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
               {order.status=="Declined"? null:<button onClick={()=>{axiosInstance.put(`/order/cancel/${order.order_id}`).then(_=>window.location.reload());}} className="text-red-900 border-2 rounded-md p-2">Cancel</button>}
                <span className="mr-2">
                  {order.status === "Delivered" && <FaCheckCircle />}
                  {order.status === "Pending" && <FaShoppingCart />}
                  {order.status === "Cancelled" && <FaTimesCircle />}
                </span>
                {order.status}
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
