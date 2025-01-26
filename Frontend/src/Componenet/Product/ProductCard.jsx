import React,{useState} from "react";
import { FaShoppingBag } from "react-icons/fa";
import axiosInstance from "../../services/axiosInstance";
import { FaShoppingCart } from "react-icons/fa";
import ProductPage from "./ProductPage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../services/UserContext";

const ProductCard = ({id, image, title, price, description, originalPrice, onAddToCartClick }) => {

  const {user}= useUser();

  const [ProductModal, setProductModal] = useState(false);
  const navigate=useNavigate()
  return (
    <div onClick={()=>{navigate(`/product-detail/${id}`)}} className="flex flex-col my-4  md:flex-row items-start shadow-lg shadow-purple-900 rounded-lg  border  md:max-w-4xl  mx-auto transition-transform transform hover:scale-105">
      {/* Left Section: Product Image */}
      <>
    
      <div className="w-full relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-full  py-10 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mt-2">{title}</h2>
          <p className="text-sm text-gray-600 truncate mt-2">{description}</p>
        </div>

        {/* Price Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-4">
          <div className="mb-2 md:mb-0">
            <p className="text-lg font-semibold text-gray-900">${price}</p>
            {originalPrice && (
              <p className="text-sm text-gray-500 line-through">${originalPrice}</p>
            )}
          </div>



          <button
            className="flex items-center mt-4 md:mt-0 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-red-700 transition duration-200 transform hover:scale-105 focus:outline-none"
            onClick={()=>{navigate(`/product-detail/${id}`)}}
          >
            <FaShoppingCart    className="mr-2" />
              Want to Buy
          </button>
          <button
            className="flex items-center mt-4 md:mt-0 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-200 transform hover:scale-105 focus:outline-none"
            onClick={()=>{ axiosInstance.post(`/cart/add/${user.id}/${id}`).then(res=>console.log(res.data)).catch(err=>console.log(err)) }}
          >
            <FaShoppingBag    className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      
      </>
      
    </div>
  );
};

export default ProductCard;
