import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/axiosInstance';
import { useUser } from '../../services/UserContext';

const Login = () => {
  const {login} =useUser();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post("/login", data)

      console.log(response.data);
    
      login(response.data.user)
      localStorage.setItem('token',response.data.access_token)
      const gettoken=localStorage.getItem('tokens')
      navigate('/Products')
      alert('Login successful!');
     
      
    } 
    catch (err) 
    {
      console.log(err);
      alert('Error during login. Please try again!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" flex  justify-center  py-10">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-center text-[#141414] mb-6 tracking-wide">Welcome Back</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 transition duration-300 ease-in-out hover:border-[#141414]">
                  <FaEnvelope className="text-gray-600 mr-2" />
                  <input
                    type="email"
                    className={`w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#141414] rounded-lg transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your Email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 transition duration-300 ease-in-out hover:border-[#141414]">
                  <FaLock className="text-gray-600 mr-2" />
                  <input
                    type="password"
                    className={`w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#141414] rounded-lg transition-all ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Password"
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: { value: 6, message: 'Password must be at least 6 characters' }
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full bg-[#141414] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 ${
                  isSubmitting && 'opacity-75 cursor-not-allowed'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden md:block md:w-1/2">
            <div
              className="h-full bg-cover bg-center rounded-r-2xl"
              style={{
                backgroundImage:
                  'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
