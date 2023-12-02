import React from 'react';
import './Inhome1.css';
import { useNavigate } from 'react-router-dom';

export default function Inhome1() {
  const navigate = useNavigate();

    const pay6 = () => {
        navigate('/Payment');
    }
  const items = [
    { id: 1, name: 'Item 1', price: 10, img: 'https://m.media-amazon.com/images/I/51rRm1fNrgL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61k01LAkA2L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/91jPwUCqKGL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/81H8JmdJIsS.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61AbWqUwDhL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/71q0lx++lSL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/91wbRaEOY9L.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/71Fr2yWWuNL.AC_UL480_FMwebp_QL65.jpg' },
    { id: 2, name: 'Item 2', price: 20, img: 'https://m.media-amazon.com/images/I/61ewC7ivYLL._AC_UL480_FMwebp_QL65_.jpg' },
    // Add more items as needed
  ];

  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center', marginLeft: '40%' }}>LUGGAGES AND BACKPACKS</h1>
      </header>
      <section id="product">
        {items.map((item) => {
          return (
            <div
              key={item.id} // Added a unique key for each item
              className="product"
              style={{ backgroundImage: `url(${item.img})` ,backgroundRepeat:'no-repeat', backgroundSize:'250px',padding:'50px'}}
            >
              <div className="product-info1">
                <h4 style={{ margin: '20px' }}>{item.price}</h4>
                <button onClick={pay6}>Buy</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
