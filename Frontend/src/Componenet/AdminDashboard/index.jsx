import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell, Legend, ZAxis } from "recharts";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import axiosInstance from "../../services/axiosInstance";
import { FaTrash } from "react-icons/fa";
import { useUser } from '../../services/UserContext';
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {

  const { user, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user && user.role=='admin') {
      navigate('/error');
    }
  }, [loading, user, navigate]); 

  

  const [prodrat, setprodrat] = useState([])
  const [allusers, setallusers] = useState([])
  const [orders, setorders] = useState([])
  // const [categorized_orders,setcategoryorders]=useState([])
  const [orders18, setOrders18] = useState([]);
  const [orders30, setOrders30] = useState([]);



  useEffect(() => {

  axiosInstance.get('/admin/product_rating_analysis').then(res => {
    
    
    axiosInstance.get('/admin/fetchusers').then(res => { console.log("-------"); console.log(res.data); setallusers(res.data.users) }).catch(err => console.log(err))
    axiosInstance.get(`/admin/fetchallorders`).then(res => { console.log(res.data); setorders(res.data.orders) }).catch(err => console.log(err))
    axiosInstance.get('/categorizedOrders').then(res => { console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="); console.log(res.data); setOrders18(res.data.orders18); setOrders30(res.data.orders30) }).catch(err => console.log(err))

    
    
    
    console.log(res.data);  setprodrat(res.data.result); }).catch(err => console.log(err))
  
  }, [])




  // Static Data
  // const productPerformance = [
  //   { category: "Electronics", rating: 4.5 },
  //   { category: "Fashion", rating: 4.2 },
  //   { category: "Home Decor", rating: 4.0 },
  //   { category: "Beauty", rating: 4.3 },
  //   { category: "Sports", rating: 4.1 },
  // ];

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "David Lee", email: "david@example.com" },
  ];

  // const orders = [
  //   { id: 101, client: "John Doe", product: "Laptop", status: "Pending" },
  //   { id: 102, client: "Jane Smith", product: "Shoes", status: "Completed" },
  //   { id: 103, client: "David Lee", product: "Watch", status: "Pending" },
  // ];

  const productSalesByAge = [
    { ageGroup: "18-30", Electronics: 400, Fashion: 300, Beauty: 200 },
    { ageGroup: "30-50", Electronics: 300, Fashion: 400, Beauty: 300 },
  ];

  const productCategories = [
    { name: "Electronics", value: 30 },
    { name: "Fashion", value: 25 },
    { name: "Home Decor", value: 20 },
    { name: "Beauty", value: 15 },
    { name: "Sports", value: 10 },
  ];

  // Handle Delete User
  const deleteUser = (id) => {
    console.log("Deleted user with ID:", id);
  };

  // Handle Change Order Status
  const changeOrderStatus = (id) => {
    console.log("Changed status for Order ID:", id);
  };

  return (
    <div className="p-6 bg-[#F0F0F0] min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold font-inter text-center mb-6 text-[#000000]">Admin Dashboard</h1>

      <div className="bg-blue-0 p-6 rounded-lg  mb-6">
        <h2 className="text-xl font-semibold text-[#7190F8] p-2 text-stroke-2 mb-4">Product Performance (Avg Rating by Category)</h2>
        <ResponsiveContainer height={300}>
          <BarChart data={prodrat}>
            <XAxis dataKey="category" />
            <YAxis domain={[0, 'auto']} ticks={[0, 1, 2, 3, 4, 5]} allowDecimals={true} />

            <Tooltip />
            <Bar dataKey="average_rating" fill="#6E01B1" barSize={40} />
            {/* <Bar dataKey="total_products" fill="#F89C00" barSize={40} name="Total Products" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Users Table */}
      <h2 className="text-xl font-semibold text-[#000F09] mb-4">Users</h2>
      <div className="bg-gray-800 overflow-x-auto p-6 rounded-lg shadow-lg mb-6">

        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Age</th>
              <th className="p-2">Gender</th>
              <th className="p-2">City</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((user) => (
              <tr key={user.id} className="border-b border-gray-700">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.age}</td>
                <td className="p-2">{user.gender}</td>
                <td className="p-2">{user.city}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Orders Table */}
      <h2 className="text-xl font-semibold text-[#000F09] mb-4">Orders</h2>
      <div className="bg-gray-800 overflow-x-auto p-6 rounded-lg shadow-lg mb-6">

        <table className="w-full overflow-scroll text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">Order Id</th>
              <th className="p-2">Client</th>
              <th className="p-2">Product</th>
              <th className="p-2">Status</th>
              <th className="p-2">Order Address</th>
              <th className="p-2">Order Date</th>
              <th className="p-2">Delivered On</th>
              <th className="p-2">Payment Status</th>
              <th className="p-2">Total Price</th>

              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-700">
                <td className="p-2">{order.order_id}</td>
                <td className="p-2">{order.user_email}</td>
                <td className="p-2">{order.product_name}</td>
                <td className="p-2">{order.status}</td>
                <td className="p-2">{order.city}</td>
                <td className="p-2">{order.order_date}</td>
                <td className="p-2">{order.delivered_on}</td>
                <td className="p-2">{order.payment_status}</td>
                <td className="p-2">{order.total_price}</td>

                <td className=" flex gap-5">
                  <button onClick={() => changeOrderStatus(order.id)} className="text-purple-500 hover:text-blue-700">
                    <PencilAltIcon className="w-5 h-5 inline-block" />
                  </button>
                  <button onClick={() => changeOrderStatus(order.id)} className="text-purple-500 hover:text-blue-700">
                    <FaTrash className="w-5 h-5 inline-block" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <h2 className="text-xl font-semibold text-[#000F09] mb-4">Products Sold by Age Group</h2> */}
      {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={orders18}>
            <XAxis dataKey="category" stroke="#CFE2E4" />
            <YAxis domain={[0, 'auto']} ticks={[0, 1, 2, 3, 4, 5]} allowDecimals={true} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Electronics" fill="#6E01B1" />
            <Bar dataKey="Fashion" fill="#D4C4C4" />
            <Bar dataKey="Beauty" fill="#03393D" />
          </BarChart>
        </ResponsiveContainer>
      </div> */}
    
    </div>
  );
};

export default AdminDashboard;
