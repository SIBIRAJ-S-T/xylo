import React from 'react';
import './Inhome1.css';

export default function Inhome1() {
  const items = [
    { id: 1, name: 'Item 1', price: 10, img: 'image-link-1' },
    { id: 2, name: 'Item 2', price: 20, img: 'image-link-2' },
    { id: 2, name: 'Item 2', price: 20, img: 'image-link-2' },
    { id: 2, name: 'Item 2', price: 20, img: 'image-link-2' },
    { id: 2, name: 'Item 2', price: 20, img: 'image-link-2' },
    { id: 2, name: 'Item 2', price: 20, img: 'image-link-2' },
    { id: 2, name: 'Item 2', price: 20, img: 'image-link-2' },
    { id: 2, name: 'Item 2', price: 20, img: 'image-link-2' },
    // Add more items as needed
  ];

  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center', marginLeft: '40%' }}>Mens Wear Section</h1>
      </header>
      <section id="product">
        {items.map((item) => {
          return (
            <div
              key={item.id} // Added a unique key for each item
              className="product"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="product-info">
                <h4 style={{ margin: '20px' }}>{item.name}</h4>
                <h4 style={{ margin: '20px' }}>{item.price}</h4>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
