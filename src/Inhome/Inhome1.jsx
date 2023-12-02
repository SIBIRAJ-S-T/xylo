import React from 'react';
import './Inhome1.css';
import { useNavigate } from 'react-router-dom';

export default function Inhome1() {

  const navigate = useNavigate();

    const pay1 = () => {
        navigate('/Payment');
    }

  const items = [
    { id: 1, name: 'Item 1', price: 10, img: 'https://m.media-amazon.com/images/I/61G1ZLzdBeS.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/716-zljdqBL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/81Bq7yzdQsL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61DtPleZhjL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61CxYdukSIL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/71b5QeT4qqL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/31r+ozoZejL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/51sVRXEgNSL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61MPGbBpC3L._AC_UL480_FMwebp_QL65_.jpg' },
    // Add more items as needed
  ];

  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center', marginLeft: '40%' }}>MENS CLOTHING</h1>
      </header>
      <section id="product">
        {items.map((item) => {
          return (
            <div
              key={item.id} // Added a unique key for each item
              className="product"
              style={{ backgroundImage: `url(${item.img})`,backgroundRepeat:'no-repeat', backgroundSize:'250px',padding:'50px'}}
            >
              <div className="product-info1">
                <h4 style={{ margin: '20px' }}>{item.price}</h4>
                <button onClick={pay1}>Buy</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
