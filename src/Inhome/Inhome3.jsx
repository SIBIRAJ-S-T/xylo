import React from 'react';
import './Inhome1.css';
import { useNavigate } from 'react-router-dom';

export default function Inhome1() {

  const navigate = useNavigate();

    const pay3 = () => {
        navigate('/Payment');
    }
  const items = [
    { id: 1, name: 'Item 1', price: 10, img: 'https://m.media-amazon.com/images/I/81V4V5tIrkL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/71XGIc13VnL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/71QqpYeQ87L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/7185vyQNA8L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61-M8rjGl0L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/71h7ykYBy-S.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/51v3KQrFe9L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/41uBVvzPg9L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/51mbO3hAMHL._AC_UL480_QL65_.jpg' },
    // Add more items as needed
  ];

  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center', marginLeft: '40%' }}>WOMENS CLOTHING</h1>
      </header>
      <section id="product">
        {items.map((item) => {
          return (
            <div
              key={item.id} // Added a unique key for each item
              className="product"
              style={{ backgroundImage: `url(${item.img})`,backgroundRepeat:'no-repeat', backgroundSize:'250px',padding:'50px' }}
            >
              <div className="product-info1">
                <h4 style={{ margin: '20px' }}>{item.price}</h4>
                <button onClick={pay3}>Buy</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
