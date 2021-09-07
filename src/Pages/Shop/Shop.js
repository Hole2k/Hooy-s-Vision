import React, {Component} from 'react';
import './Shop.css'
import {ShopItems} from './ShopItems';
import Footer from '../../components/Footer/Footer';


class Shop extends Component{
    render()
    {
        return(
            
            <div className="shop-container">
   
                {ShopItems.map((item, index) =>{
return(
<div key={index} className="cart">
<a href="#"><img src={item.url} width="600" height="400"/></a>
<p className="name">{item.title}</p>
<div className="cost">
<p>{item.price} PLN</p>
<button>Add to cart</button>
</div>
</div>
)
                })}

            </div>
        )
    }
}

export default Shop;