import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaKey, FaPhoneAlt, FaHome, FaCity } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';
import axios from 'axios';

const Signup = () => {

  const [cities, setcities] = useState([])

  useEffect(()=>{ axios.get("https://api.thecompaniesapi.com/v2/locations/cities").then(res=>{console.log(res.data); setcities(res.data.cities)})},[])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    const { confirmPassword, ...cleanedUserData } = data;
    console.log(cleanedUserData)
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post('/signup', cleanedUserData);
     
      Swal.fire({
        title: 'Good job!',
        text: 'Account Created Successfully',
        icon: 'success',
      });
      reset();
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: 'Error!',
        text: 'Error during sign up. Please try again!',
        icon: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];
  return (
    <div className=" py-10 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl flex overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-extrabold text-center text-[#141414] mb-6">Create Your Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg p-3 transition-all focus-within:border-[#141414]">
                <FaUser className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full outline-none focus:ring-0"
                  {...register('name', { required: 'Name is required' })}
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg p-3 transition-all focus-within:border-[#141414]">
                <FaEnvelope className="text-gray-500 mr-3" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full outline-none focus:ring-0"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg p-3 transition-all focus-within:border-[#141414]">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none focus:ring-0"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
            </div>

            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg p-3 transition-all focus-within:border-[#141414]">
                <FaKey className="text-gray-500 mr-3" />
                <input
                  type="password"
                  placeholder="Repeat your password"
                  className="w-full outline-none focus:ring-0"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => value === watch('password') || 'Passwords do not match',
                  })}
                />
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword.message}</p>}
            </div>

            {/* Age Field */}
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg p-3 transition-all focus-within:border-[#141414]">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  type="number"
                  placeholder="Age"
                  className="w-full outline-none focus:ring-0"
                  {...register('age', {
                    required: 'Age is required',
                    min: {
                      value: 18,
                      message: 'Age must be at least 18',
                    },
                  })}
                />
              </div>
              {errors.age && <p className="text-red-500 text-sm mt-2">{errors.age.message}</p>}
            </div>

              {/* Age Field */}
              <div className="mb-6">
        <div className="flex items-center border border-gray-300 rounded-lg p-3 transition-all focus-within:border-[#141414]">
          <FaLock className="text-gray-500 mr-3" />
          <select
            {...register('gender', { required: 'Gender is required' })}
            className="w-full outline-none focus:ring-0"
          >
            <option value="">Select Gender</option>
            {genderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {errors.gender && <p className="text-red-500 text-sm mt-2">{errors.gender.message}</p>}
      </div>

      {/* City Dropdown */}
      <div className="mb-6">
        <div className="flex items-center border border-gray-300 rounded-lg p-3 transition-all focus-within:border-[#141414]">
          <FaCity className="text-gray-500 mr-3" />
         
            <select
              // options={cities.map(city => ({ value: city.name, label: city.name }))}
              {...register('city', { required: 'City is required' })}
              placeholder="Select City"
            >
              
            {cities.map(city=><option value={city.name}>{city.name}</option>)}
        
          </select>
        </div>
        {errors.city && <p className="text-red-500 text-sm mt-2">{errors.city.message}</p>}
      </div>

            {/* Mobile Number Field */}
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg p-3 transition-all focus-within:border-[#141414]">
                <FaPhoneAlt className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  placeholder="Your Mobile Number"
                  className="w-full outline-none focus:ring-0"
                  {...register('mobileNumber', { required: 'Mobile Number is required' })}
                />
              </div>
              {errors.mobileNumber && <p className="text-red-500 text-sm mt-2">{errors.mobileNumber.message}</p>}
            </div>

            {/* Address Field */}
            <div className="mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg p-3 transition-all focus-within:border-[#141414]">
                <FaHome className="text-gray-500 mr-3" />
                <textarea
                  rows="3"
                  placeholder="Your Address"
                  className="w-full outline-none focus:ring-0"
                  {...register('address', { required: 'Address is required' })}
                />
              </div>
              {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#141414] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#6e01b1] disabled:opacity-50 transition-all duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center rounded-r-2xl"
          style={{
            backgroundImage:
              'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Signup;
