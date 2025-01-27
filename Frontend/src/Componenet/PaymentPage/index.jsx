import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useUser } from "../../services/UserContext";
import axiosInstance from "../../services/axiosInstance";


const stripePromise = loadStripe("pk_test_your_publishable_key");

const CheckoutForm = ({ onClose }) => {
  const {id,price}=useParams();
  const {user} =useUser() ;
  // console.log(user.id);
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // New state for the order address
  const [orderAddress, setOrderAddress] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const orderData = {
      userid: user.id, 
      product_id: id,  
      quantity: 1,
      total_price: price,  
      delivered_on: new Date(new Date().setDate(new Date().getDate() + 5)),  
      payment_status: "completed",
      order_date:new Date().toISOString().split('T')[0],
      payment_mode:"card",  
      status: "pending", 
      order_location: orderAddress,
    };

    try {
      console.log(orderData)
      const { data } = await axiosInstance.post("/order/create", orderData);
      console.log(data)


      const clientSecret  = data.client_secret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

        setSuccess(true);
        setTimeout(onClose, 2000); // Auto-close after success
      
    } catch (error) {
      // setError("Payment failed. Please try again.");
      setError(error.message)

    }

    setLoading(false);
  };

  return (
    <form onSubmit={handlePayment} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Payment Successful! 🎉</p>}

      {/* Address input field */}
      <div className="space-y-2">
        <label htmlFor="order-address" className="text-gray-700">Order Address</label>
        <input
          id="order-address"
          type="text"
          value={orderAddress}
          onChange={(e) => setOrderAddress(e.target.value)}
          placeholder="Enter your delivery address"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {!success && (
        <div className="border p-3 rounded">
          <CardElement />
        </div>
      )}

      {!success && (
        <button
          type="submit"
          disabled={!stripe || loading}
          className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Processing..." : "Pay "}
        </button>
      )}

      <button
        type="button"
        onClick={() => { onClose() }}
        className="block w-full text-center text-gray-600 mt-3"
      >
        Cancel
      </button>
    </form>
  );
};

const PaymentModal = ({ close }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <Elements stripe={stripePromise}>
          <CheckoutForm onClose={close} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentModal;
