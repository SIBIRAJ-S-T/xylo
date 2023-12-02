import React from 'react';
import './Inhome8.css';
import { useNavigate } from 'react-router-dom';

export default function Inhome1() {

  const navigate = useNavigate();

  const pay8 = () => {
      navigate('/Payment');
  }

  const items = [
    { id: 1, name: 'Item 1', price: 10, img: 'https://m.media-amazon.com/images/I/41nqjy1Z8XL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61IxKwQeYAL.AC_UL960_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/51a7GDGdB6L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61KjXW-HO0L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/614q-cQ1gvL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/71Bhs5onJVL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/617zJ0UFPzL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/612nGYnRZJL.AC_UL480_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/51SufCj2KzL._AC_UL480_FMwebp_QL65_.jpg' },
    // Add more items as needed
  ];

  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center', marginLeft: '40%' }}>BEAUTY & MAKEUPS</h1>
      </header>
      <section id="product">
        {items.map((item) => {
          return (
            <div
              key={item.id} // Added a unique key for each item
              className="product"
              style={{ backgroundImage: `url(${item.img})`,backgroundRepeat:'no-repeat', backgroundSize:'305px', padding:'50px' }}
            >
              <div className="product-info1">
                <h4>{item.price}</h4>
                <button onClick={pay8}>Buy</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
