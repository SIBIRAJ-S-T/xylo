import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Headerimage from './Headerimage'
export default function Home() {
  return (
    <div>
        <header>
            <h1>My E-commerce Store</h1>
        </header>
    
        <nav>
            <div className='anc'>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#contact">Contact</a>
            </div>
            <div className='log'>
            <Link to="/Login"><button>Login</button></Link>
            <button>sign Up</button>
            <button>Add to Cart</button>
            </div>
        </nav>

        <section className='scrl'>
            <marquee scrollamount='20' direction='right' behavior='scroll'>
                <img src="https://picsum.photos/id/1067/540/720" alt="Slide 1" />
                <img src="https://picsum.photos/id/249/540/720" alt="Slide 4" />
                <img src="https://picsum.photos/id/122/540/720" alt="Slide 2" />
                <img src="https://picsum.photos/id/188/540/720" alt="Slide 3" />
            </marquee>
        </section>

        <section>
            <div class="product">
                <img src="logo192.png" alt="Product 1"/>
                <div class="product-info">
                    <h3>Product Name 1</h3>
                    <p>Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$19.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>

            <div class="product">
                <img src="logo512.png" alt="Product 1"/>
                <div class="product-info">
                    <h3>Product Name 1</h3>
                    <p>Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$19.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <img src="logo512.png" alt="Product 2"/>
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <img src="logo512.png" alt="Product 2"/>
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <img src="logo512.png" alt="Product 2"/>
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <img src="logo512.png" alt="Product 2"/>
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <img src="logo512.png" alt="Product 2"/>
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <img src="logo512.png" alt="Product 2"/>
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
           
    
        </section>

        <footer id='contact'>
    <div>
        <h2>Contact Us</h2>
        <p>Email: info@yourstore.com</p>
        <p>Phone: +1 (123) 456-7890</p>
    </div>
    
    <div>
        <h2>Follow Us</h2>
        <a href="#">Facebook</a> |
        <a href="#">Twitter</a> |
        <a href="#">Instagram</a>
    </div>

    <div>
        <h2>Address</h2>
        <p>123 Main Street, Cityville, Country</p>
    </div>
</footer>
    
         {/*<footer>
            &copy; 2023 My E-commerce Store. All rights reserved.
   </footer>*/}
    
   
    
    </div>
  )
}
