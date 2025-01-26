import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import {Home} from '../src/Componenet/Home';
import './App.css';
import Menu from './Componenet/Home/Menu';

import './App.css';
import Signup from './Componenet/JoinUs/Signup';    
import Login from './Componenet/JoinUs/Login';
import Product from './Componenet/Product';
import { UserProvider } from './services/UserContext';
import ProductPage from './Componenet/Product/ProductPage';
import Footer from './Componenet/Footer';
import AdminDashboard from './Componenet/AdminDashboard';
import OrderHistory from './Componenet/OrderHistory';
import { useUser } from './services/UserContext';





const AppLayout = () => {

  return (
    <div className="app-layout">
      {/* Common Navbar */}
      <Menu />

      {/* Dynamic Content */}
      <main className="content">
        <Outlet />
      </main>

      <Footer/>

      <footer className="footer">
        <p>&copy; 2025 Ritik Ecomm. All rights reserved.</p>
      </footer>
    </div>
  );
};

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <AppLayout />, 
    children:[
      {
      path:"/",
      element:<Home/>
    },
      {path:"/signup",
        element:<Signup/>
      },
      {
        path:"/error",
        element:<>You  have to login first</>
      },
      
      {path:"/login",
        element:<Login/>
      },
      {path:"/Products",
        element:<Product/>
      },
      {path:"/product-detail/:id",
        element:<ProductPage/>
      },
      {path:"/product-detail/:id/:price",
        element:<ProductPage/>
      },
      {path:"/Admin",
        element:<AdminDashboard/>
      },
      {
        path:"/orderhistory",
        element:<OrderHistory/>
      }
      
  ]
  },
  
]);

function App() {
  return (
    <div className="App">
      <UserProvider>
      <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
}

export default App;
