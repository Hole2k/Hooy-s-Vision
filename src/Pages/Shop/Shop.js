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
<img src={item.url}/>
<p className="name">{item.title}</p>
<div className="cost">
<p>{item.cost} PLN</p>
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