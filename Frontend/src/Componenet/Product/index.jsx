import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 
import axiosInstance from '../../services/axiosInstance';
import { FaSearch } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { useUser } from '../../services/UserContext';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000); // Default price range
  const [showFilters, setShowFilters] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm();
  
  const { user, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/error');  // Correct navigation after component mounts and user is not found
    }
  }, [loading, user, navigate]);  // Add dependencies to run the effect when loading or user changes


  const fetchproducts=()=>{   
    axiosInstance.get('/products')
      .then(res => {
        setProducts(res.data.products);
        console.log(res.data)
      })
      .catch(err => console.log(err));}




      const fetchcategories = () => {
        const token = localStorage.getItem('token');  // Retrieve the token
         console.log("ffetchbkjbu;ou");
         console.log(token)
        axiosInstance.get('/fetchcatgeories') 
          .then(res => {
            setCategory(res.data.categories);
            console.log(res.data);
            fetchproducts()
          })
          .catch(err => {
            console.log(err);
          });
      };



    const fetchsubcategories=(selectedcategory)=>{
      axiosInstance.get(`fetchsubcatgeories/${selectedcategory}`).then(res=>{ setSubcategory(res.data.subcategories); console.log(res.data)}).catch(err=>console.log(err))
    }



  useEffect(() => {
   
    fetchcategories();

  }, []);



  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

 
  

  // Watch for changes in the price
  const watchedMaxPrice = watch("maxPrice", maxPrice);

  const handleApplyFilters = (data) => {
    console.log("Applied Filters: ", data);
    if(data.subcategory && data.maxPrice)
    {

     axiosInstance.get(`/products/subcategory/price/${data.subcategory}/${0}/${data.maxPrice}`).
     then(res=>{setProducts(res.data.products);console.log(data)}).catch(err=>console.log(err))
    }
    else if(data.category  && !data.subcategory && data.maxPrice )
    {
      console.log('cayegory wih price filter');
      console.log(data.maxPrice)
      axiosInstance.get(`/products/price_category/${0}/${data.maxPrice}/${data.category}`)
      .then(res=>{setProducts(res.data.products);console.log(res.data)})
      .catch(err=>{console.log(err)})

    }
    else if(!data.category && !data.subcategory && data.maxPrice)
    {
      console.log("price filer")
      axiosInstance.get(`/products/price/${0}/${data.maxPrice}`).
      then(res=>{setProducts(res.data.products);console.log(res.data)}).
      catch(err=>console.log(err))
    }
    else if(data.category && !data.subcategory && !data.maxPrice)
    {
      console.log('cayegory filter');
      axiosInstance.get(`/products/category/${data.category}`)
      .then(res=>{setProducts(res.data.products);console.log(res.data)})
      .catch(err=>{console.log(err)})
    }
    else if(data.category && data.subcategory && !data.maxPrice)
      {
        console.log('cayegory filter');
        axiosInstance.get(`/products/subcategories/${data.subcategory}`)
        .then(res=>{setProducts(res.data.products);console.log(res.data)})
        .catch(err=>{console.log(err)})
      }
  
  };


  return (
    <div className="py-5">
      {/* Product Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-dark">Explore Our Latest Products</h1>
        <p className="lead text-muted">Browse through our collection of amazing products</p>
      </div>

    

    <div>
      {/* Filters Section */}
      <form onSubmit={handleSubmit(handleApplyFilters)} className="flex md:flex-row flex-col justify-center items-center py-5 gap-4">


        {/* Categories Dropdown */}
        <select
          {...register("category")}
          className="border-2 border-gray-200 shadow-md p-3 font-inter font-medium text-[#141414] rounded-md w-25"
        
          onChange={(e)=>{fetchsubcategories(e.target.value);setValue('subcategory','')}}
        >
          <option value="">Select Category</option>

           {category.map(categ=><option value={categ}>{categ}</option>)} 
          
        </select>

        {/* Subcategories Dropdown */}
        <select
          {...register("subcategory")}
          className="border-2 border-gray-200 shadow-md p-3 font-inter font-medium text-[#141414] rounded-md w-25"
          
          
        >
          <option value="">Select Subcategory</option>
          {subcategory.map(subcat=><option value={subcat}>{subcat}</option>)}
        </select>

        {/* Price Range Slider */}
        <div className="mb-4 flex gap-2 items-center">
      
        <input
        type="checkbox"
        name="priceCheckbox"
        id="priceCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
      />
      {
            !isChecked && <lable>Price Range </lable>
          }
       
       {isChecked && <>
          <label className="mr-3">Price Range</label>
          <input
            {...register("maxPrice", { value: maxPrice })}
            type="range"
            min="0"
            max="1000"
            step="10"
            defaultValue={0}
            
            
            className="form-range bg-[#141414] w-50"
            style={{ transition: "all 0.3s ease" }}
          />
          <span className="ml-2">${watchedMaxPrice}</span> </>}
        </div>

        {/* Apply Filters Button */}
        <div className="text-center mb-4">
          <button
            type="submit"
            className="bg-purple-500 rounded text-white px-4 py-2"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>

      {/* Product Cards */}
      <div className="w-full   ">
        {products.map((product, index) => (
          <div key={index} className="">
           <>
           
           <ProductCard
              id={product.productId}
              image={product.imageUrl}
              title={product.name}
              description={product.description}
              price={product.price}
            />
           
           </>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
