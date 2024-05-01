import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Headerimage from './Headerimage'
import Delete from './Delete'
import Logout from './Logout'
import { useNavigate } from 'react-router-dom'
import Inhome1 from './Inhome/Inhome1'
export default function Home() {

    const navigate = useNavigate();

    const Inhome1 = () => {
        navigate('Inhome/Inhome1');
    }
    const Inhome2 = () => {
        navigate('Inhome/Inhome2');
    }
    const Inhome3 = () => {
        navigate('Inhome/Inhome3');
    }
    const Inhome4 = () => {
        navigate('Inhome/Inhome4');
    }
    const Inhome5 = () => {
        navigate('Inhome/Inhome5');
    }
    const Inhome6 = () => {
        navigate('Inhome/Inhome6');
    }
    const Inhome7 = () => {
        navigate('Inhome/Inhome7');
    }
    const Inhome8 = () => {
        navigate('Inhome/Inhome8');
    }

  return (
    <div id='home'>
        <header>
            <h1>
                Xylo
            </h1>
        </header>
    
        <nav>
            <div className='anc'>
            <a href="#home">Home</a>
            <a href="#productss">Products</a>
            <a href="#productss">Shop</a>
            <a href="#">About</a>
            <a href="#contact">Contact</a>
            </div>
            
            <div className='log'>
            <Link to="/Login"><button>Login</button></Link>
            <Link to="/Signup"><button>Sign Up</button></Link>
            <Delete/>
            <Logout/>
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

        <section id="productss">
            
            <div class="product" onClick={Inhome1}>
                <div class="product-info">
                
                </div>
            </div>

            <div class="product2" onClick={Inhome2}>
                <div class="product-info">
                    
                </div>
            </div>
    
            <div class="product3" onClick={Inhome3}>
                <div class="product-info">
                    
                </div>
            </div>
    
            <div class="product4" onClick={Inhome4}>
                <div class="product-info">
                    
                </div>
            </div>
    
            <div class="product5" onClick={Inhome5}>
                <div class="product-info">
                    
                </div>
            </div>
    
            <div class="product6" onClick={Inhome6}>
                <div class="product-info">
                    
                </div>
            </div>

            <div class="product7" onClick={Inhome7}>
                <div class="product-info">
                    
                </div>
            </div>

            <div class="product8" onClick={Inhome8}>
                <div class="product-info">
                    
                </div>
            </div>

        </section>

        <footer id='contact'>
    <div>
        <h2>Contact Us</h2>
        <p>Email: xylo@yourstore.com</p>
        <p>Phone: 0424-8345-1233</p>
    </div>
    
    <div>
        <h2>Follow Us</h2>
        <a href="#">Facebook</a> |
        <a href="#"> Twitter</a> |
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
