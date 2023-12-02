import React from 'react'
import './Payment.css'
import { useNavigate } from 'react-router-dom';

export default function New2() {

    const navigate = useNavigate();

    const ppp = () => {
        navigate('/');
    }
  return (
    <div>
        
    <header className='hea'>
            <h1>Payment Page</h1>
        </header>
    
        <section className='sect'>
            <h2>Payment Details</h2>
            
            <label for="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" placeholder="Enter card number"/>
    
            <label for="expirationDate">Expiration Date</label>
            <input type="text" id="expirationDate" placeholder="MM/YYYY"/>
    
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="Enter CVV"/>
    
            <label for="paymentMethod">Payment Method</label>
            <select id="paymentMethod">
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              
            </select>
    
            <button onClick={ppp}>Submit Payment</button>
        </section>
    
        <footer className='foote'>
            &copy; 2023 Your E-commerce Store. All rights reserved.
        </footer>
    
        
    
   
    
    </div>
  )
}
