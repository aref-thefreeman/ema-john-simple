import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    //cart update
    const [cart, setCart] = useState([]);


    const handleProduct = (clickedProduct) => {
        console.log('Product added', clickedProduct);

        //cart update
        const newCart = [...cart, clickedProduct];
        setCart(newCart);
    }
   

    return (
        <div className = "shop-container">
            
            <div className="product-container">
                    {
                        products.map(pd => <Product 
                        handleAddProduct = {handleProduct}
                            product = {pd}></Product>
                        
                    )}
            </div>

            <div className="cart-container">
                <Cart cart= {cart}></Cart>
                
            </div>
            

        </div>
    );
};

export default Shop;