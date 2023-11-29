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
            <a href="#product">Product</a>
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
            <marquee scrollamount='15' direction='right' behavior='scroll'>
                <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/PD23/sbcheader/Hero" alt="Slide 1" />
                <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/BOTW23/Nov/29/BOTW_29_3000x800" alt="Slide 4" />
                <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="Slide 2" />
                <img src="https://m.media-amazon.com/images/G/31/img21/Apple_Ultra2/series9_1400x800._CB578797397_.jpg" alt="Slide 3" />
            </marquee>
        </section>

        <section id="product">
            <div class="product">
                <div class="product-info">
                    <h3>Product Name 1</h3>
                    <p>Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$19.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>

            <div class="product">
                <div class="product-info">
                    <h3>Product Name 1</h3>
                    <p>Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$19.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>

            <div class="product">
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>

            <div class="product">
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
