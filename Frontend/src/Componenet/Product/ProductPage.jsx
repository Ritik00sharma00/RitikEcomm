import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";
import PaymentModal from "../PaymentPage";
import { useUser } from '../../services/UserContext';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {

  const {id}=useParams();
  const navigate=useNavigate();
  const [product, setProduct] = useState("");
  const [order, setorder] = useState(false);

  
  const { user, loading } = useUser();
  

  useEffect(() => {
    if (!loading && !user) {
      navigate('/error');  // Correct navigation after component mounts and user is not found
    }
  }, [loading, user, navigate]);  // Add dependencies to run the effect when loading or user changes


  useEffect(() => {
    if (!loading && !user) {
      navigate('/error');     }
  }, [loading, user, navigate]);  

  


  useEffect(()=>{ axiosInstance.get(`/products/id/${id}`).then(res=>{setProduct(res.data);console.log(res.data)}).catch(err=>console.log(err)) },[])



  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

    const newLocal = "⭐";
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 overflow-auto">  {/* Product Image */}
      <div className="w-full  flex justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        <p className="text-gray-600 text-lg mt-3">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mt-3">{product.price}</p>

        <div className="mt-4">
          <span className="font-semibold text-lg">Product Rating:</span>
          <span className="ml-2 text-yellow-400">
            {newLocal.repeat(Math.floor(product.rating))}
            {product.rating % 1 !== 0 && "★"}
          </span>
          <span className="ml-2 text-gray-600">({product.rating}/5)</span>
        </div>

        <div className="mt-4">
          <span className="font-semibold text-lg">Your Rating:</span>
          <div className="flex items-center justify-center mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={30}
                className={`cursor-pointer ${
                  (hoverRating || userRating) >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setUserRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
        </div>

        <button
          className="mt-6 bg-green-600 text-white font-bold py-3 px-6 rounded-lg w-full
          hover:bg-green-700 transition transform hover:scale-105 animate-pulse"
          onClick={()=>{setorder(!order);navigate(`/product-detail/${id}/${product.price}`)}}
        >
          Order Now
        
        </button>

      </div>
      {order && <PaymentModal close={()=>{setorder(false)}}/>}
    </div>
  );
};

export default ProductPage;
