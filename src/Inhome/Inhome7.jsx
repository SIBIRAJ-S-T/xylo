import React from 'react';
import './Inhome1.css';
import { useNavigate } from 'react-router-dom';

export default function Inhome1() {
  const navigate = useNavigate();

    const pay7 = () => {
        navigate('/Payment');
    }
  const items = [
    { id: 1, name: 'Item 1', price: 10, img: 'https://m.media-amazon.com/images/I/518cM16oKzL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/41BUfxRPtYL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/51Z2iCVcVnL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/31Ymzd4QqZL.AC_SR480,600.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/51-AOYMEEJL.AC_UL480_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/51W+kNtRSYS.AC_UL480_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/51bYrcpchkL.AC_UL480_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61n63wRwIuL.AC_UL480_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61+THk53YIL._AC_UL480_FMwebp_QL65_.jpg' },
    // Add more items as needed
  ];

  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center', marginLeft: '40%' }}>EYEWEARS</h1>
      </header>
      <section id="product">
        {items.map((item) => {
          return (
            <div
              key={item.id} // Added a unique key for each item
              className="product"
              style={{ backgroundImage: `url(${item.img})`,backgroundRepeat:'no-repeat', backgroundSize:'350px',padding:'50px' }}
            >
              <div className="product-info1">
                <h4 style={{ margin: '20px' }}>{item.price}</h4>
                <button onClick={pay7}>Buy</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
