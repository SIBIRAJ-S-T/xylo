import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div>
    
    
    
        <header>
            <h1>My E-commerce Store</h1>
        </header>
    
        <nav>
            <a href="#">Home</a> |
            <a href="#">Shop</a> |
            <a href="#">About</a>
        </nav>
    
        <section>
            <div class="product">
                <img src="product1.jpg" alt="Product 1"/>
                <div class="product-info">
                    <h3>Product Name 1</h3>
                    <p>Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$19.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
            <div class="product">
                <img src="product2.jpg" alt="Product 2"/>
                <div class="product-info">
                    <h3>Product Name 2</h3>
                    <p>Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>$29.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>
    
           
    
        </section>
    
        <footer>
            &copy; 2023 My E-commerce Store. All rights reserved.
        </footer>
    
   
    
    </div>
  )
}
