import React from 'react'
import './Inhome.css'
import Home from './Home';
export default function Inhome() {

    const items = [
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
      ]

  return (
    <div>
    <header>
        <h1 style={{textAlign:'center', marginLeft:'40%'}}>Mens Wear Section</h1>
    </header>
    <section id="product">

    {
        items.map((item) => {
            return (
                <div class="product">
                    <div class="product-info">
                        <img src={item.img} alt='image'/>
                        <h4 style={{margin:'20px'}}>{item.name}</h4>
                        <h4 style={{margin:'20px'}}>{item.price}</h4>
                    </div>
                </div>

            )
        })
    }
            
   
</section>
    </div>
  )
}
