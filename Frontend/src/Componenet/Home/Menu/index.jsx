import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiChevronDown } from 'react-icons/hi';
import Logo from '../../Logo';
import { FaShoppingBag } from 'react-icons/fa';
import Cart from '../../Cart';
import { set } from 'react-hook-form';
import { useUser } from '../../../services/UserContext';
import { useNavigate } from 'react-router-dom'; 
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showcart,setshowcart]=useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const {logout,user}=useUser()
  
  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white  shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="w-32">
              <Logo/>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <HiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:ml-8">
            <div className="flex space-x-8">
              <NavLink to="/" isActive={isActiveLink("/")}>
                Home
              </NavLink>
              <NavLink to="/about" isActive={isActiveLink("/about")}>
                About
              </NavLink>
              <NavLink to="/orderhistory" isActive={isActiveLink("/contact")}>
                 Orders
              </NavLink>
              
             {user?.role=='admin'? <NavLink to="/Admin" isActive={isActiveLink("/contact")}>
                 Admin
              </NavLink>:""}
              
          {  user!=null?  <button onClick={()=>{logout(); navigate('/login')}}>
                Logout
              </button>:""}


              {/* Dropdown */}
              <div className="relative">
                <button  onClick={()=>{setIsOpen(true)}} className="group inline-flex items-center text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-150">
                  Join Us
                  <HiChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                {isOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div  onClick={()=>{setIsOpen(false)}} className="py-1" role="menu">
            <DropdownLink  to="/signup">Sign Up</DropdownLink>
            <DropdownLink to="/login">Login</DropdownLink>
          </div>
        </div>
      )}

              </div>
              <div className="mt-3 relative">
   { user!=null?  <FaShoppingBag
        onClick={() => setshowcart(!showcart)}
        className="hover:text-purple-700 cursor-pointer"
      />:""}
      {showcart && (
        <div
        className={`fixed py-20 inset-0 z-50 hidden md:flex items-center justify-start bg-transparent bg-opacity-50 transform transition-transform duration-600 ease ${
          showcart ? 'translate-x-0' : '-translate-x-full'
        }`}
          onClick={() => setshowcart(false)}
        >
          <div
            className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setshowcart(false)}
            >
              &times;
            </button>
            <Cart /> 
          </div>
        </div>
      )}
    </div>
            </div>
          </div>
        
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        
        <div className="px-2 pt-2 pb-3 space-y-1">

        
          <MobileNavLink to="/" isActive={isActiveLink("/")}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" isActive={isActiveLink("/about")}>
            About
          </MobileNavLink>
          <MobileNavLink to="/contact" isActive={isActiveLink("/contact")}>
            Contact
          </MobileNavLink>
          <MobileNavLink to="/orderhistory" isActive={isActiveLink("/orderhistory")}>
            Orders
          </MobileNavLink>
          {user==null?<MobileNavLink to="/signup" isActive={isActiveLink("/signup")}>
            Sign Up
          </MobileNavLink>:""}
         {user==null? <MobileNavLink to="/login" isActive={isActiveLink("/login")}>
            Login
          </MobileNavLink> :""}
          <MobileNavLink to="/login" isActive={isActiveLink("/login")}>
          
          {  user!=null?  <button onClick={()=>{logout(); navigate('/login')}}>
                Logout
              </button>:""}
          </MobileNavLink>
          
          <div className="mt-3 relative">
   { user!=null?  <FaShoppingBag
        onClick={() => setshowcart(!showcart)}
        className="hover:text-purple-700 cursor-pointer"
      />:""}
      {showcart && (
        <div
        className={`fixed py-20 inset-0 z-50 hidden md:flex items-center justify-start bg-transparent bg-opacity-50 transform transition-transform duration-600 ease ${
          showcart ? 'translate-x-0' : '-translate-x-full'
        }`}
          onClick={() => setshowcart(false)}
        >
          <div
            className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setshowcart(false)}
            >
              &times;
            </button>
            <Cart /> 
          </div>
        </div>
      )}
    </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-150 ${
      isActive
        ? 'text-purple-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-purple-600'
        : 'text-gray-700 hover:text-purple-600'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
      isActive
        ? 'bg-purple-50 text-purple-600'
        : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
    }`}
  >
    {children}
  </Link>
);

const DropdownLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600"
    role="menuitem"
  >
    {children}
  </Link>
);

export default Menu;