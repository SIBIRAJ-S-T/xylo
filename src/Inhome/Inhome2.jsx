import React from 'react';
import './Inhome1.css';
import { useNavigate } from 'react-router-dom';


export default function Inhome1() {

  const navigate = useNavigate();

    const pay2 = () => {
        navigate('I/Payment');
    }
  const items = [
    { id: 1, name: 'Item 1', price: 10, img: 'https://m.media-amazon.com/images/I/61fCL6V3u2L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/81tc-IHJhFL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61ReDpy9zkL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61JkhI7zI3L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/718pckYHAML.AC_UL480_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/71qLb4XIj5L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/71688egGyXL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/716nyR5TWAL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/41pBlgU8a0L._AC_UL480_FMwebp_QL65_.jpg' },
    // Add more items as needed
  ];

  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center', marginLeft: '45%' }}>FOOTWEARS</h1>
      </header>
      <section id="product">
        {items.map((item) => {
          return (
            <div
              key={item.id} // Added a unique key for each item
              className="product"
              style={{backgroundImage: `url(${item.img})`,backgroundRepeat:'no-repeat', backgroundSize:'350px',padding:'50px' }}
            >
              <div className="product-info1">
                <h4 style={{ margin: '20px' }}>{item.price}</h4>
                <button onClick={pay2}>Buy</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
