import React, { useEffect, useState } from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import axiosInstance from '../../services/axiosInstance';
import { useUser } from "../../services/UserContext";


const Cart = () => {
  const [products, setProducts] = useState([]);

  const {user}=useUser();
  

  
  const fetchcarts=()=>{
    axiosInstance.get(`fetch-carts/${user.id}`).then(res=>{console.log(res.data);setProducts(res.data.products)}).catch(err=>console.log(err))}
  useEffect(()=>{
    fetchcarts()
  },[])




  
  const updateQuantity = (cartItemId,productId,quantity) => {

    axiosInstance.post(`/cart/update/${cartItemId}/${productId}/${quantity}`).then(res=>{console.log(res.data);fetchcarts();}).catch(err=>console.log(err))
    
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => 
      total + (product.price * product.quantity), 0
    );
  };


  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid gap-6">
        {products.map(product => (
          <div 
            key={product.id} 
            className="border rounded-lg overflow-hidden p-6 shadow-sm"
          >
            <div className="flex items-center gap-6">
              <img 
                src={product.product_image} 
                alt={product.product_name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{product.product_name}</h3>
                <p className="text-gray-600">${product.product_price}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border rounded-lg p-1">
                  <button 
                    onClick={() => updateQuantity(product.cartitemId,product.product_id,product.quantity-1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <FaMinus className="w-4 h-4" />
                  </button>


                  {product.quantity <=product.inventory?<span className="w-8 text-center">{product.quantity}</span>:alert("There is no more product left with us")}
                  
                  <button 
                  onClick={()=>updateQuantity(product.cartitemId,product.product_id,product.quantity+1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>

                <button 
                  onClick={() => removeProduct()}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length > 0 ? (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Cart Total</h2>
            <p className="text-2xl font-bold">${calculateTotal()}</p>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          Your cart is empty
        </div>
      )}
    </div>
  );
};

export default Cart;
